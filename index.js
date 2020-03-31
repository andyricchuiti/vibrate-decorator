export default function vibrate(timingPattern) {
  return function decorated(className, propertyName, decoratedFn) {
    const origMethod = decoratedFn.value;
    decoratedFn.value = function (...args) {
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate(timingPattern);
        } catch {
          // fails silently
        }
      }
      origMethod.call(this, ...args);
    };
    return decoratedFn;
  }
}
