var titleLogin = document.getElementsByClassName('title-login')[0];
var titleRegister = document.getElementsByClassName('title-register')[0];

function init(){
    var token = hasToken('Token');
    if(token){
        titleLogin.innerText = "已登录";
        titleRegister.style.display = 'none';
        titleLogin.setAttribute('href', '#');
    }
}
init();

function hasToken(str){
    var cookiesArr = document.cookie.split("; ");  // ['user=aimee', 'age=18']
    var len = cookiesArr.length;
    for(var i=0; i<len; i++){
        var eleArr = cookiesArr[i].split("=");
        if(str == eleArr[0]){
            return eleArr[1];
        }
    }
}
