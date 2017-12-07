/**
  * @desc 随机生成颜色
  * @return {String}
  */

function RandomColor() {
  return '#' + ('000000' + (Math.random() * 0x100000 << 0)).toString(16).slice(-6);
}
