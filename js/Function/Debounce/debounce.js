/**
  * @desc 函数防抖,在执行周期内绝不执行该函数,若在执行周期内再次出发该函数,则重新计时
  * @param {Function} handler 执行函数
  * @param {Number} delay 执行周期
  * @return {Function} 返回的执行函数
  */

function debounce(handler, delay) {
  var timer = null;

  return function () {
    var context = this,
        args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {
      handler.call(context, args);
    }, delay);
  };
}
