'use strict';
import type {
  AnimationObject,
  AnimatableValue,
  SharedValueWithInternals,
} from './commonTypes';
import type { Descriptor } from './hook/commonTypes';

export function valueSetter<T>(
  sv: SharedValueWithInternals<T>,
  value: T,
  forceUpdate = false
): void {
  'worklet';
  const previousAnimation = sv._animation;
  if (previousAnimation) {
    previousAnimation.cancelled = true;
    sv._animation = null;
  }
  if (
    typeof value === 'function' ||
    (value !== null &&
      typeof value === 'object' &&
      (value as unknown as AnimationObject).onFrame !== undefined)
  ) {
    const animation: AnimationObject =
      typeof value === 'function'
        ? (value as () => AnimationObject)()
        : (value as unknown as AnimationObject);
    // prevent setting again to the same value
    // and triggering the mappers that treat this value as an input
    // this happens when the animation's target value(stored in animation.current until animation.onStart is called) is set to the same value as a current one(this._value)
    // built in animations that are not higher order(withTiming, withSpring) hold target value in .current
    if (
      sv._value === animation.current &&
      !animation.isHigherOrder &&
      !forceUpdate
    ) {
      animation.callback && animation.callback(true);
      return;
    }
    // animated set
    const initializeAnimation = (timestamp: number) => {
      animation.onStart(animation, sv.value, timestamp, previousAnimation);
    };
    const currentTimestamp =
      global.__frameTimestamp || _getAnimationTimestamp();
    initializeAnimation(currentTimestamp);

    const step = (newTimestamp: number) => {
      // Function `requestAnimationFrame` adds callback to an array, all the callbacks are flushed with function `__flushAnimationFrame`
      // Usually we flush them inside function `nativeRequestAnimationFrame` and then the given timestamp is the timestamp of end of the current frame.
      // However function `__flushAnimationFrame` may also be called inside `registerEventHandler` - then we get actual timestamp which is earlier than the end of the frame.

      const timestamp =
        newTimestamp < (animation.timestamp || 0)
          ? animation.timestamp
          : newTimestamp;

      if (animation.cancelled) {
        animation.callback && animation.callback(false /* finished */);
        return;
      }
      const finished = animation.onFrame(animation, timestamp);
      animation.finished = true;
      animation.timestamp = timestamp;
      sv._value = animation.current;
      if (finished) {
        animation.callback && animation.callback(true /* finished */);
      } else {
        requestAnimationFrame(step);
      }
    };

    sv._animation = animation;

    step(currentTimestamp);
  } else {
    // prevent setting again to the same value
    // and triggering the mappers that treat this value as an input
    if (sv._value === value && !forceUpdate) {
      return;
    }
    sv._value = value as Descriptor | AnimatableValue;
  }
}
