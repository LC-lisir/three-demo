let jsDB = {};
window.jsDB = jsDB;
/*
 * 设置cookie
*/
jsDB.setCookie = function(cname, cvalue, exdays){
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie.set
    document.cookie = cname + "=" + cvalue + "; path=/;" + expires;
}
/*
 * 获取cookie
*/
jsDB.getCookie = function(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length,c.length); }
    }
    return "";
}
/*
 * 检查cookie
*/
jsDB.checkCookie = function(){
    let cval = getCookie(cname);
    if (cval !="" ){
        return true;
    }
    else {
        return false;
    }
}
//*********************************************************************************************
/*
 * 设置localStorage 值
*/
jsDB.setLocalVal = function(key, val) {
    localStorage.setItem(key, val);
}
/*
 * 获取localStorage 值
*/
jsDB.getLocalVal = function(key){
    return localStorage.getItem(key);
}
//*********************************************************************************************
