/**
  * @desc 函数节流,在请求时间大于执行周期后,才执行该函数
  * @param {Function} handler 执行函数
  * @param {Number} delay 执行周期
  * @return {Function} 返回的执行函数
  */

function throttle(handler, delay) {
  var timer = null,
      begin = new Date();

  return function () {
    var context = this,
        args = arguments,
        current = new Date();

    clearTimeout(timer);

    if (current - begin >= delay) {
       handler.apply(context, args);
       begin = current;
    } else {
      timer = setTimeout(function () {
        handler.call(context, args);
      }, delay);
    }
  };
}
