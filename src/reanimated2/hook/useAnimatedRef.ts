'use strict';
import type { Component } from 'react';
import { useRef } from 'react';
import { useSharedValue } from './useSharedValue';
import type { AnimatedRef } from './commonTypes';
import type { ShadowNodeWrapper } from '../commonTypes';
import { getShadowNodeWrapperFromRef } from '../fabricUtils';
import {
  makeShareableCloneRecursive,
  registerShareableMapping,
} from '../shareables';
import type { ScrollViewComponent } from 'react-native';
import { Platform, findNodeHandle } from 'react-native';
import { isFabric } from '../PlatformChecker';
import type { AnimatedComponentRef } from 'src/createAnimatedComponent/commonTypes';

const IS_FABRIC = isFabric();

interface MaybeScrollableComponent extends Component {
  getNativeScrollRef?: () => React.ElementRef<typeof ScrollViewComponent>;
  getScrollableNode?: () => AnimatedComponentRef;
  viewConfig?: {
    uiViewClassName?: string;
  };
}

function getComponentOrScrollable(component: MaybeScrollableComponent) {
  if (IS_FABRIC && component.getNativeScrollRef) {
    return component.getNativeScrollRef();
  } else if (!IS_FABRIC && component.getScrollableNode) {
    return component.getScrollableNode();
  }
  return component;
}

const getTagValueFunction = IS_FABRIC
  ? getShadowNodeWrapperFromRef
  : findNodeHandle;

export function useAnimatedRef<
  TComponent extends MaybeScrollableComponent
>(): AnimatedRef<TComponent> {
  const tag = useSharedValue<number | ShadowNodeWrapper | null>(-1);
  const viewName = useSharedValue<string | null>(null);

  const ref = useRef<AnimatedRef<TComponent>>();

  if (!ref.current) {
    const fun: AnimatedRef<TComponent> = <AnimatedRef<TComponent>>((
      component
    ) => {
      // enters when ref is set by attaching to a component
      if (component) {
        tag.value = getTagValueFunction(getComponentOrScrollable(component));
        fun.current = component;
        // viewName is required only on iOS with Paper
        if (Platform.OS === 'ios' && !IS_FABRIC) {
          viewName.value = component?.viewConfig?.uiViewClassName || 'RCTView';
        }
      }
      return tag.value;
    });

    fun.current = null;

    const remoteRef = makeShareableCloneRecursive({
      __init: () => {
        'worklet';
        const f = () => tag.value;
        f.viewName = viewName;
        return f;
      },
    });
    registerShareableMapping(fun, remoteRef);
    ref.current = fun;
  }

  return ref.current;
}
