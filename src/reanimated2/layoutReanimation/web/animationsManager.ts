'use strict';

import type { AnimationConfig, AnimationNames, CustomConfig } from './config';
import { Animations } from './config';
import type {
  AnimatedComponentProps,
  LayoutAnimationStaticContext,
} from '../../../createAnimatedComponent/commonTypes';
import { LayoutAnimationType } from '../animationBuilder/commonTypes';
import {
  getProcessedConfig,
  handleExitingAnimation,
  handleLayoutTransition,
  setElementAnimation,
} from './componentUtils';
import { areDOMRectsEqual } from './domUtils';
import type { TransitionData } from './animationParser';
import { makeElementVisible } from './componentStyle';

function chooseConfig<ComponentProps extends Record<string, unknown>>(
  animationType: LayoutAnimationType,
  props: Readonly<AnimatedComponentProps<ComponentProps>>
) {
  const config =
    animationType === LayoutAnimationType.ENTERING
      ? props.entering
      : animationType === LayoutAnimationType.EXITING
      ? props.exiting
      : animationType === LayoutAnimationType.LAYOUT
      ? props.layout
      : null;

  return config;
}

function checkUndefinedAnimationFail(
  initialAnimationName: string,
  isLayoutTransition: boolean
) {
  // This prevents crashes if we try to set animations that are not defined.
  // We don't care about layout transitions since they're created dynamically
  if (initialAnimationName in Animations || isLayoutTransition) {
    return false;
  }

  console.warn(
    "[Reanimated] Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion."
  );

  return true;
}

function chooseAction(
  animationType: LayoutAnimationType,
  animationConfig: AnimationConfig,
  element: HTMLElement,
  transitionData: TransitionData
) {
  switch (animationType) {
    case LayoutAnimationType.ENTERING:
      setElementAnimation(element, animationConfig);
      break;
    case LayoutAnimationType.LAYOUT:
      transitionData.reversed = animationConfig.reversed;
      handleLayoutTransition(element, animationConfig, transitionData);
      break;
    case LayoutAnimationType.EXITING:
      handleExitingAnimation(element, animationConfig);
      break;
  }
}

function tryGetAnimationConfig<ComponentProps extends Record<string, unknown>>(
  props: Readonly<AnimatedComponentProps<ComponentProps>>,
  animationType: LayoutAnimationType
) {
  const config = chooseConfig(animationType, props);
  if (!config) {
    return null;
  }

  type ConstructorWithStaticContext = LayoutAnimationStaticContext &
    typeof config.constructor;

  const isLayoutTransition = animationType === LayoutAnimationType.LAYOUT;
  const animationName =
    typeof config === 'function'
      ? config.presetName
      : (config.constructor as ConstructorWithStaticContext).presetName;

  const shouldFail = checkUndefinedAnimationFail(
    animationName,
    isLayoutTransition
  );

  if (shouldFail) {
    return null;
  }

  const animationConfig = getProcessedConfig(
    animationName,
    animationType,
    config as CustomConfig,
    animationName as AnimationNames
  );

  return animationConfig;
}

export function startWebLayoutAnimation<
  ComponentProps extends Record<string, unknown>
>(
  props: Readonly<AnimatedComponentProps<ComponentProps>>,
  element: HTMLElement,
  animationType: LayoutAnimationType,
  transitionData?: TransitionData
) {
  if (element.style.transform !== '') {
    console.warn(
      `[Reanimated] Property "transform" will not be included in layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.`
    );
  }

  const animationConfig = tryGetAnimationConfig(props, animationType);

  if (animationConfig) {
    chooseAction(
      animationType,
      animationConfig,
      element,
      transitionData as TransitionData
    );
  } else {
    makeElementVisible(element, 0);
  }
}

export function tryActivateLayoutTransition<
  ComponentProps extends Record<string, unknown>
>(
  props: Readonly<AnimatedComponentProps<ComponentProps>>,
  element: HTMLElement,
  snapshot: DOMRect
) {
  if (!props.layout) {
    return;
  }

  const rect = element.getBoundingClientRect();

  if (areDOMRectsEqual(rect, snapshot)) {
    return;
  }

  const transitionData: TransitionData = {
    translateX: snapshot.x - rect.x,
    translateY: snapshot.y - rect.y,
    scaleX: snapshot.width / rect.width,
    scaleY: snapshot.height / rect.height,
    reversed: false, // This field is used only in `SequencedTransition`, so by default it will be false
  };

  startWebLayoutAnimation(
    props,
    element,
    LayoutAnimationType.LAYOUT,
    transitionData
  );
}
