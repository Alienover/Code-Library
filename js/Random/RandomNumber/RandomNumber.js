/**
  * @desc 生成指定范围的随机数
  * @param {Number} min
  * @param {Number} max
  * @return {Number}
  */

function RandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
