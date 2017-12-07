/**
  * @desc 移除元素中指定的class
  * @param {HTMLElement} ele 需要移除class的元素
  * @param {String} cls 需要移除的class
  */

var hasClass = require('../hasClass/hasClass');

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}
