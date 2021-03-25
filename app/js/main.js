//тут подключаем файлы JS, никаких разделителей в конце строки не ставить!
@@include("class/main.js");
if (window.getSelection().rangeCount >= 1) {
  var r = window.getSelection().getRangeAt(0);
}
