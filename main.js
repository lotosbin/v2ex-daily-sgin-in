// ==UserScript==
// @name        a simple  script for v2ex sign
// @namespace   www.jimmy66.com
// @include     https://www.v2ex.com/*
// @version     1
// @grant       none
// ==/UserScript==
/*进入签到页面*/
function autoclick1() {
  var a = document.getElementsByTagName('a');
  var flag = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i].firstChild.nodeValue == '领取今日的登录奖励') {
      var link = a[i];
      link.click();
      flag = 1;
      return 1;
    }
  }
  if (flag == 0) setCookie();
  return 0;
}
/*点击按钮签到*/

function autoclick2() {
  var input = document.getElementsByTagName('input');
  for (var i = 0; i < input.length; i++) {
    if (input[i].getAttribute('value') == '领取 X 铜币') {
      var button = input[i];
      button.click();
      return 1;
    }
  }
  return 0;
}
/*判断是否有cookie*/

function checkCookie() {
  if (document.cookie.length > 0) return 1;
   else return 0;
}
/*设置cookie，1天后到期*/

function setCookie() {
  var date = new Date();
  var time = 1;
  date.setTime(date.getTime() + time * 24 * 3600 * 1000);
  document.cookie = 'status=setted;expire=' + date.toGMTString();
}
/*页面加载完毕后自动执行的匿名函数*/

window.onload = function () {
  var checkCookie = checkCookie();
  if (checkCookie == 1) {
    autoclick1();
    autoclick2();
  } 
  else return 0;
}
