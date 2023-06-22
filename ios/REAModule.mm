#import <React/RCTBridge+Private.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTFabricSurface.h>
#import <React/RCTRuntimeExecutorFromBridge.h>
#import <React/RCTScheduler.h>
#import <React/RCTSurface.h>
#import <React/RCTSurfacePresenter.h>
#import <React/RCTSurfacePresenterBridgeAdapter.h>
#import <React/RCTSurfaceView.h>
#endif

#import <RNReanimated/NativeProxy.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNReanimated/REAInitializerRCTFabricSurface.h>
#import <RNReanimated/ReanimatedCommitHook.h>
#endif

#import <RNReanimated/REAModule.h>
#import <RNReanimated/REANodesManager.h>
#import <RNReanimated/ReanimatedVersion.h>
#import <RNReanimated/SingleInstanceChecker.h>

using namespace facebook::react;
using namespace reanimated;

@interface RCTBridge (JSIRuntime)
- (void *)runtime;
@end

@interface RCTBridge (RCTTurboModule)
- (std::shared_ptr<facebook::react::CallInvoker>)jsCallInvoker;
- (void)_tryAndHandleError:(dispatch_block_t)block;
@end

#ifdef RCT_NEW_ARCH_ENABLED
static __strong REAInitializerRCTFabricSurface *reaSurface;
#else
typedef void (^AnimatedOperation)(REANodesManager *nodesManager);
#endif

@implementation REAModule {
#ifdef RCT_NEW_ARCH_ENABLED
  __weak RCTSurfacePresenter *_surfacePresenter;
  std::shared_ptr<PropsRegistry> propsRegistry_;
  std::shared_ptr<ReanimatedCommitHook> commitHook_;
  std::weak_ptr<NativeReanimatedModule> reanimatedModule_;
#else
  NSMutableArray<AnimatedOperation> *_operations;
#endif
#ifdef DEBUG
  SingleInstanceChecker<REAModule> singleInstanceChecker_;
#endif
  bool hasListeners;
}

RCT_EXPORT_MODULE(ReanimatedModule);

#ifdef RCT_NEW_ARCH_ENABLED
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
#endif // RCT_NEW_ARCH_ENABLED

- (void)invalidate
{
#ifdef RCT_NEW_ARCH_ENABLED
  [[NSNotificationCenter defaultCenter] removeObserver:self];
#endif
  [_nodesManager invalidate];
  [[NSNotificationCenter defaultCenter] removeObserver:self
                                                  name:UIApplicationDidReceiveMemoryWarningNotification
                                                object:nil];
  [super invalidate];
}

- (dispatch_queue_t)methodQueue
{
  // This module needs to be on the same queue as the UIManager to avoid
  // having to lock `_operations` and `_preOperations` since `uiManagerWillPerformMounting`
  // will be called from that queue.
  return RCTGetUIManagerQueue();
}

#ifdef RCT_NEW_ARCH_ENABLED

- (std::shared_ptr<UIManager>)getUIManager
{
  RCTScheduler *scheduler = [_surfacePresenter scheduler];
  return scheduler.uiManager;
}

- (void)setUpNativeReanimatedModule:(std::shared_ptr<UIManager>)uiManager
{
  if (auto reanimatedModule = reanimatedModule_.lock()) {
    reanimatedModule->setUIManager(uiManager);
    reanimatedModule->setPropsRegistry(propsRegistry_);
  }
}

- (void)injectDependencies:(jsi::Runtime &)runtime
{
  auto uiManager = [self getUIManager];
  react_native_assert(uiManager.get() != nil);
  propsRegistry_ = std::make_shared<PropsRegistry>();
  commitHook_ = std::make_shared<ReanimatedCommitHook>(propsRegistry_, uiManager);
  uiManager->registerCommitHook(*commitHook_);
  [self setUpNativeReanimatedModule:uiManager];
}

#pragma mark-- Initialize

- (void)installReanimatedAfterReload
{
  // called from REAInitializerRCTFabricSurface::start
  __weak __typeof__(self) weakSelf = self;
  _surfacePresenter = self.bridge.surfacePresenter;
  [_nodesManager setSurfacePresenter:_surfacePresenter];

  // to avoid deadlock we can't use Executor from React Native
  // but we can create own and use it because initialization is already synchronized
  react_native_assert(self.bridge != nil);
  RCTRuntimeExecutorFromBridge(self.bridge)(^(jsi::Runtime &runtime) {
    if (__typeof__(self) strongSelf = weakSelf) {
      [strongSelf injectDependencies:runtime];
    }
  });
}

- (void)handleJavaScriptDidLoadNotification:(NSNotification *)notification
{
  _surfacePresenter = self.bridge.surfacePresenter;
  RCTScheduler *scheduler = [_surfacePresenter scheduler];
  __weak __typeof__(self) weakSelf = self;
  _surfacePresenter.runtimeExecutor(^(jsi::Runtime &runtime) {
    __typeof__(self) strongSelf = weakSelf;
    if (strongSelf == nil) {
      return;
    }
    if (auto reanimatedModule = strongSelf->reanimatedModule_.lock()) {
      auto eventListener =
          std::make_shared<facebook::react::EventListener>([reanimatedModule](const RawEvent &rawEvent) {
            if (!RCTIsMainQueue()) {
              // event listener called on the JS thread, let's ignore this event
              // as we cannot safely access worklet runtime here
              // and also we don't care about topLayout events
              return false;
            }
            return reanimatedModule->handleRawEvent(rawEvent, CACurrentMediaTime() * 1000);
          });
      [scheduler addEventListener:eventListener];
    }
  });
}

- (void)setBridge:(RCTBridge *)bridge
{
  [super setBridge:bridge];

  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(handleJavaScriptDidLoadNotification:)
                                               name:RCTJavaScriptDidLoadNotification
                                             object:nil];

  [[self.moduleRegistry moduleForName:"EventDispatcher"] addDispatchObserver:self];
  [bridge.uiManager.observerCoordinator addObserver:self];

  // only within the first loading `self.bridge.surfacePresenter` exists
  // during the reload `self.bridge.surfacePresenter` is null
  _surfacePresenter = self.bridge.surfacePresenter;
#ifdef DEBUG
  if (reaSurface == nil) {
    // we need only one instance because SurfacePresenter is the same during the application lifetime
    reaSurface = [[REAInitializerRCTFabricSurface alloc] init];
    [_surfacePresenter registerSurface:reaSurface];
  }
  reaSurface.reaModule = self;
#endif

  if (_surfacePresenter == nil) {
    // _surfacePresenter will be set in installReanimatedAfterReload
    _nodesManager = [[REANodesManager alloc] initWithModule:self bridge:self.bridge surfacePresenter:nil];
    return;
  }

  _nodesManager = [[REANodesManager alloc] initWithModule:self bridge:self.bridge surfacePresenter:_surfacePresenter];
}

#else

- (void)setBridge:(RCTBridge *)bridge
{
  [super setBridge:bridge];

  _nodesManager = [[REANodesManager alloc] initWithModule:self uiManager:self.bridge.uiManager];
  _operations = [NSMutableArray new];

  [bridge.uiManager.observerCoordinator addObserver:self];
}

#pragma mark-- Batch handling

- (void)addOperationBlock:(AnimatedOperation)operation
{
  [_operations addObject:operation];
}

#pragma mark - RCTUIManagerObserver

- (void)uiManagerWillPerformMounting:(RCTUIManager *)uiManager
{
  [_nodesManager maybeFlushUpdateBuffer];
  if (_operations.count == 0) {
    return;
  }

  NSArray<AnimatedOperation> *operations = _operations;
  _operations = [NSMutableArray new];

  REANodesManager *nodesManager = _nodesManager;

  [uiManager addUIBlock:^(__unused RCTUIManager *manager, __unused NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    for (AnimatedOperation operation in operations) {
      operation(nodesManager);
    }
    [nodesManager operationsBatchDidComplete];
  }];
}

#endif // RCT_NEW_ARCH_ENABLED

#pragma mark-- Events

- (NSArray<NSString *> *)supportedEvents
{
  return @[ @"onReanimatedCall", @"onReanimatedPropsChange" ];
}

- (void)eventDispatcherWillDispatchEvent:(id<RCTEvent>)event
{
  // Events can be dispatched from any queue
  [_nodesManager dispatchEvent:event];
}

- (void)startObserving
{
  hasListeners = YES;
}

- (void)stopObserving
{
  hasListeners = NO;
}

- (void)sendEventWithName:(NSString *)eventName body:(id)body
{
  if (hasListeners) {
    [super sendEventWithName:eventName body:body];
  }
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(installTurboModule)
{
  facebook::jsi::Runtime *jsiRuntime = [self.bridge respondsToSelector:@selector(runtime)]
      ? reinterpret_cast<facebook::jsi::Runtime *>(self.bridge.runtime)
      : nullptr;

  if (jsiRuntime) {
    jsi::Runtime &runtime = *jsiRuntime;

    auto reanimatedModule = reanimated::createReanimatedModule(self.bridge, self.bridge.jsCallInvoker);

    auto workletRuntimeValue = runtime.global()
                                   .getProperty(runtime, "ArrayBuffer")
                                   .asObject(runtime)
                                   .asFunction(runtime)
                                   .callAsConstructor(runtime, {static_cast<double>(sizeof(void *))});
    uintptr_t *workletRuntimeData =
        reinterpret_cast<uintptr_t *>(workletRuntimeValue.getObject(runtime).getArrayBuffer(runtime).data(runtime));
    workletRuntimeData[0] = reinterpret_cast<uintptr_t>(reanimatedModule->runtimeManager_->runtime.get());

    runtime.global().setProperty(runtime, "_WORKLET_RUNTIME", workletRuntimeValue);

    runtime.global().setProperty(runtime, "_WORKLET", false);

#ifdef RCT_NEW_ARCH_ENABLED
    runtime.global().setProperty(runtime, "_IS_FABRIC", true);
#else
    runtime.global().setProperty(runtime, "_IS_FABRIC", false);
#endif // RCT_NEW_ARCH_ENABLED

    auto version = getReanimatedVersionString(runtime);
    runtime.global().setProperty(runtime, "_REANIMATED_VERSION_CPP", version);

    runtime.global().setProperty(
        runtime,
        jsi::PropNameID::forAscii(runtime, "__reanimatedModuleProxy"),
        jsi::Object::createFromHostObject(runtime, reanimatedModule));

#ifdef RCT_NEW_ARCH_ENABLED
    reanimatedModule_ = reanimatedModule;
    if (_surfacePresenter != nil) {
      // reload, uiManager is null right now, we need to wait for `installReanimatedAfterReload`
      [self injectDependencies:runtime];
    }
#endif // RCT_NEW_ARCH_ENABLED

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleMemoryWarning)
                                                 name:UIApplicationDidReceiveMemoryWarningNotification
                                               object:nil];
  }

  return nil;
}

- (void)handleMemoryWarning
{
  int a = 0;
}

@end

//- (void)handleMemoryWarning
//{
//  // We only want to run garbage collector when the loading is finished
//  // and the instance is valid.
//  if (!_valid || _loading) {
//    return;
//  }
//
//  // We need to hold a local retaining pointer to react instance
//  // in case if some other tread resets it.
//  auto reactInstance = _reactInstance;
//  if (reactInstance) {
//    int unloadLevel = RCTGetMemoryPressureUnloadLevel();
//    reactInstance->handleMemoryPressure(unloadLevel);
//  }
//}

// react-native/packages/react-native/ReactCommon/react/bridgeless/ReactInstance.cpp
// void ReactInstance::handleMemoryPressureJs(int pressureLevel) {
//  // The level is an enum value passed by the Android OS to an onTrimMemory
//  // event callback. Defined in ComponentCallbacks2.
//  enum AndroidMemoryPressure {
//    TRIM_MEMORY_BACKGROUND = 40,
//    TRIM_MEMORY_COMPLETE = 80,
//    TRIM_MEMORY_MODERATE = 60,
//    TRIM_MEMORY_RUNNING_CRITICAL = 15,
//    TRIM_MEMORY_RUNNING_LOW = 10,
//    TRIM_MEMORY_RUNNING_MODERATE = 5,
//    TRIM_MEMORY_UI_HIDDEN = 20,
//  };
//  const char *levelName;
//  switch (pressureLevel) {
//    case TRIM_MEMORY_BACKGROUND:
//      levelName = "TRIM_MEMORY_BACKGROUND";
//      break;
//    case TRIM_MEMORY_COMPLETE:
//      levelName = "TRIM_MEMORY_COMPLETE";
//      break;
//    case TRIM_MEMORY_MODERATE:
//      levelName = "TRIM_MEMORY_MODERATE";
//      break;
//    case TRIM_MEMORY_RUNNING_CRITICAL:
//      levelName = "TRIM_MEMORY_RUNNING_CRITICAL";
//      break;
//    case TRIM_MEMORY_RUNNING_LOW:
//      levelName = "TRIM_MEMORY_RUNNING_LOW";
//      break;
//    case TRIM_MEMORY_RUNNING_MODERATE:
//      levelName = "TRIM_MEMORY_RUNNING_MODERATE";
//      break;
//    case TRIM_MEMORY_UI_HIDDEN:
//      levelName = "TRIM_MEMORY_UI_HIDDEN";
//      break;
//    default:
//      levelName = "UNKNOWN";
//      break;
//  }
//
//  switch (pressureLevel) {
//    case TRIM_MEMORY_RUNNING_LOW:
//    case TRIM_MEMORY_RUNNING_MODERATE:
//    case TRIM_MEMORY_UI_HIDDEN:
//      // For non-severe memory trims, do nothing.
//      LOG(INFO) << "Memory warning (pressure level: " << levelName
//                << ") received by JS VM, ignoring because it's non-severe";
//      break;
//    case TRIM_MEMORY_BACKGROUND:
//    case TRIM_MEMORY_COMPLETE:
//    case TRIM_MEMORY_MODERATE:
//    case TRIM_MEMORY_RUNNING_CRITICAL:
//      // For now, pressureLevel is unused by collectGarbage.
//      // This may change in the future if the JS GC has different styles of
//      // collections.
//      LOG(INFO) << "Memory warning (pressure level: " << levelName
//                << ") received by JS VM, running a GC";
//      runtimeScheduler_->scheduleWork([=](jsi::Runtime &runtime) {
//        SystraceSection s("ReactInstance::handleMemoryPressure");
//        runtime.instrumentation().collectGarbage(levelName);
//      });
//      break;
//    default:
//      // Use the raw number instead of the name here since the name is
//      // meaningless.
//      LOG(WARNING) << "Memory warning (pressure level: " << pressureLevel
//                   << ") received by JS VM, unrecognized pressure level";
//      break;
//  }
//}
