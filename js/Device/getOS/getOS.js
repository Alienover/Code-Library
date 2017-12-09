/**
  * @desc 获取操作系统类型
  * @return {String}
  */

function getOS() {
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
  var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'WindowsPhone';
  if (/android/i.test(userAgent)) return 'Android';
  if (/mac/i.test(appVersion)) return 'MaxOSX';
  if (/win/i.test(appVersion)) return 'Windows';
  if (/linux/i.test(appVersion)) return 'Linux';
}
