
let jsTrans = {};
window.jsTrans = jsTrans;

/*
 * axios全局配置
*/
axios.defaults.withCredentials = true
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
    config => {
        const token = jsDB.getCookie('token');
        if (token ) { // 判断
            // 是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = token  //请求头加上token
        }
        return config
    },
    err => {
        return Promise.reject(err)
})
axios.interceptors.response.use(function(response) {
    if(response.status == 403) {
        alert('超时请重新登录!');
        window.parent.location.href = "html/login.html";
    }
   return response;
}, function (error) {
    return Promise.reject(error)
})
/*
 * ajax全局配置
*/
$.ajaxSetup({
    dataType: "json",
    cache: false,
    complete: function(xhr) {
        if(xhr.status == 403) {
            alert('超时请重新登录!');
            window.parent.location.href = "html/login.html";
        }
    }
});

/*
 * jquery 以get方式获取数据，跨域 session保持
*/
jsTrans.ajaxGet = function(url, param, dook, doerr){
    $.ajax({
        url:  url ,
        type:  'GET' ,
        async: true ,
        dataType: 'json',
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        headers: {
             "token": jsDB.getCookie('token')
        },
        data: param,
        success: function (res){
            if(dook)
                dook(res);
        },
        error: function(){
            if(doerr)
                doerr();
        }
    });
}
/*
 *  jquery 以post方式提交数据，跨域 session保持
*/
jsTrans.ajaxPost = function(url, param, dook, doerr){
    $.ajax({
        url:  url ,
        type:  'post' ,
        async: true ,
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        headers: {
            "token": jsDB.getCookie('token')
        },
        dataType: 'json',
        data: param,
        success: function (res){
            if(dook)
                dook(res);
        },
        error: function(){
            if(doerr)
                doerr();
        }
    });
}
/*
 *  axios 以get方式获取数据，跨域 session保持
*/
jsTrans.axiosGet = function(url, param, dook, doerr){
    axios.get(url, {
        params: param
    }).then(function (res) {
            dook(res);
    }).catch(function (err) {
        if(doerr)
            doerr(err);
    });
}
/*
 *  axios  以post方式提交数据，跨域 session保持
*/
jsTrans.axiosPost = function(url, param, dook, doerr){
    axios.post(url,
        JSON.stringify(param, {indices: false})
    ).then(function (res) {
        if(dook)
            dook(res);
    }).catch(function (err) {
        if(doerr)
            doerr(err);
    });
}
/*
 *  原生fetch 以get方式提交数据，跨域 session保持
*/
jsTrans.fetchGet = function(url, param, dook, doerr){
    fetch(jsTrans.JsonToUrl(url, param),{
        mode:"cors",
        method: 'GET',
        credentials: 'include',
        headers: {'token': jsDB.getCookie('token')}
    }).then(res => {
        if(res.status == 403) {
            alert('超时请重新登录!');
            window.parent.location.href = "html/login.html";
        }
        return res.json();
    }).then(t =>{
        if(dook)
            dook(t);
    }).catch(e=>{
        if(doerr)
            doerr(e);
    });
}
/*
 *  原生fetch 以post方式提交数据，跨域 session保持
*/
jsTrans.fetchPost = function(url, param, dook, doerr){
    fetch(url,{
        mode:"cors",
        method: 'POST',
        credentials: 'include',
        body: param,
        headers: {'token': jsDB.getCookie('token')}
    }).then(res => {
        if(res.status == 403) {
            alert('超时请重新登录!');
            window.parent.location.href = "html/login.html";
        }
        return res.json();
    }).then(t =>{
        dook(t);
    }).catch(e=>{
        if(doerr)
            doerr(e);
    });
}
/*
 * json格式参数转换成url参数
*/
jsTrans.JsonToUrl = function(url, param){
    let furl = url;
    if (param) {
        let paramsArray = [];
        //拼接参数
        Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]));
        if (url.search(/\?/) === -1) {
            furl += '?' + paramsArray.join('&')
        } else {
            furl += '&' + paramsArray.join('&')
        }
    }
    return furl;
}
jsTrans.getUrlParamVal = function(name)
{
    var reg = new RegExp(name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp(+ name + "/([^/]*)(/|$)", "i");
    var r = window.location.href.substr(1).match(reg);
    var q = window.location.href.substr(1).match(reg_rewrite);
    console.log(r);
    if(r != null){
        return decodeURI(r[1]);
    }else if(q != null){
        return decodeURI(q[1]);
    }else{
        return null;
    }}
