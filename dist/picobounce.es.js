var picobounce = function (options) {
  if ( options === void 0 ) options = { wait: 300, immediate: false };

  var wait = typeof options === 'number' ? options : options.timeout;
  var timeout;

  return function (func) {
    var shouldCall = options.immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = undefined;

      if (!options.immediate) {
        func();
      }
    }, wait);

    shouldCall && func();
  }
};

export default picobounce;
