/**
  * @desc 为元素添加clss
  * @param {HTMLElement} ele
  * @param {String} cls
*/
var hasClass = require('../hasClass/hasClass');

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += '' + cls;
  }
}
