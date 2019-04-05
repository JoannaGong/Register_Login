var loginTabs = document.getElementById("loginTabs");//选项卡 登录
var registerTabs = document.getElementById("registerTabs");//选项卡 注册

var login = document.getElementsByClassName('login')[0];//登录块
var usernameLogin = document.getElementById('username-login');//登录名
var pwdLogin = document.getElementById('pwd-login');//登录密码
var btnLogin = document.getElementById('btn-login');//登录提交按钮

var register = document.getElementsByClassName('register')[0];//注册块
var usernameRegister = document.getElementById('username-register');//注册名
var pwdRegister = document.getElementById('pwd-register');//注册密码
var pwd2Register = document.getElementById('pwd2-register');//确认密码
var btnRegister = document.getElementById('btn-register');//注册提交按钮



loginTabs.onclick = function(){
    register.style.display = "none";
    login.style.display = "block";
    loginTabs.className="tabs-link select";
    registerTabs.className="tabs-link";
}
registerTabs.onclick = function(){
    register.style.display = "block";
    login.style.display = "none";
    loginTabs.className="tabs-link";
    registerTabs.className="tabs-link select";
}

// 注册进入
btnRegister.onclick = function(e){
    e.preventDefault();
    var userStr = usernameRegister.value;
    var pwdStr = pwdRegister.value;
    var pwd2Str = pwd2Register.value;
    if(pwdStr == pwd2Str){
        var str = "name=" + userStr + "&password=" + pwdStr;
        ajax('POST', 'http://vip.chanke.xyz/mi/register', cbs, str, true);
    }
}

function cbs(data){
    var data = JSON.parse(data);
    if(data.errorCode == 0){
        location.href = './index.html';    // 跳转到登录页面
    }else {
        alert(data.errorMessage);
    }
    
}

// 登录进入
btnLogin.onclick = function(e){
    e.preventDefault();
    var userStr = usernameLogin.value;
    var pwdStr = pwdLogin.value;
    var str = "name=" + userStr + "&password=" + pwdStr;
    ajax('POST', 'http://vip.chanke.xyz/mi/login', cbs, str, true);
}

/**
 * 一、查看接口文档：
 * 第一步：注册/登录 http://api.chanke.xyz
 * 第二步：查看接口 http://api.chanke.xyz/project/11/interface/api
 * 
 * 二、更改 wamp 访问域名
 * 第一步： C:\Windows\System32\drivers\etc
 *         最后一行添加
 *          127.0.0.1 test.chanke.xyz
 * 第二步：（选改）
 * wamp --> appcha --> httpd-chosts.conf --> ServerName test.chanke.xyz ServerAlias test.chanke.xyz
 */

function init(){
    var search = location.search.slice(1).split('&'); // ["url=register"]
    var len = search.length;
    for(var i=0; i<len; i++){
        if(search[i] == 'url=register'){
            registerTabs.click();
        }
    }
}
init();