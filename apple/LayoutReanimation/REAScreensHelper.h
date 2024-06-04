#define LOAD_SCREENS_HEADERS                                         \
  ((!RCT_NEW_ARCH_ENABLED && __has_include(<RNScreens/RNSScreen.h>)) \
  || (RCT_NEW_ARCH_ENABLED && __has_include(<RNScreens/RNSScreen.h>) && __cplusplus))

#if LOAD_SCREENS_HEADERS
#import <RNScreens/RNSScreen.h>
#import <RNScreens/RNSScreenNavigationContainer.h>
#import <RNScreens/RNSScreenStack.h>
#endif

#import <RNReanimated/REAUIKit.h>

@interface REAScreensHelper : NSObject

+ (REAUIView *)getScreenForView:(REAUIView *)view;
+ (REAUIView *)getStackForView:(REAUIView *)view;
+ (bool)isScreenModal:(REAUIView *)screen;
+ (REAUIView *)getScreenWrapper:(REAUIView *)view;
+ (int)getScreenType:(REAUIView *)screen;
+ (bool)isRNSScreenType:(REAUIView *)screen;
+ (bool)isStackChanged:(REAUIView *)view;
+ (REAUIView *)findTopScreenInChildren:(REAUIView *)screen;
+ (REAUIView *)getActiveTabForTabNavigator:(REAUIView *)tabNavigator;
+ (bool)isChild:(REAUIView *)child OfScreen:(REAUIView *)screen;
+ (bool)isOnTop:(REAUIView *)view;

@end
