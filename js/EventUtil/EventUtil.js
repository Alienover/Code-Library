/**
  * @desc 跨浏览器实现事件绑定
  * @param {Object} element 需要绑定事件的对象
  * @param {String} type 需要绑定的事件类型
  * @param {Function} hanlder 事件的回调函数
  * @param {Object}
*/
var EventUtil = {
  //绑定事件
  addHandler : function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  //获取事件
  getEvent : function (event) {
    return event ? event : window.event;
  },
  //获取事件目标
  getTarget : function (event) {
    return event.target || event.srcElement;
  },
  //阻止默认的行动
  preventDefault : function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  //解除绑定事件
  removeHandler : function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  //停止事件冒泡
  stopPropagation : function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};
