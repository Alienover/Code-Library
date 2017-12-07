/**
  * @desc 判断元素是否有某个class
  * @param {HTMLElement} ele 需要判断的元素
  * @param {String} cls 需要判断的class名字
  * @param {Boolean}
*/
function hasClass(ele, cls) {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className));
}
