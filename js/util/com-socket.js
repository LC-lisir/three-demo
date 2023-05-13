/*
 *  定义jsSocket类
*/
let jsCheck = {};
window.jsSocket = jsSocket;
/**
 * 初始化websocket
 */
jsSocket.initSocket = function(wsUrl, funcInit, funcOpen, funcMsg, funcErr, funcClose)
{
    var ws = null;
    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
        ws = new WebSocket(wsUrl);
        if(funcInit)
        	funcInit(ws);
    }
    else {
        alert('当前浏览器 不支持WEBSOCKET!');
        return null;
    }

    //连接成功建立的回调方法
    ws.onopen = function () {
        if(funcOpen)
        	funcOpen(ws);
    }

    //接收到消息的回调方法
    ws.onmessage = function (event) {
        if(funcMsg)
        	funcMsg(ws, event);
    }

    //连接发生错误的回调方法
    ws.onerror = function () {
        if(funcErr)
        	funcErr(ws);
    };

    //连接关闭的回调方法
    ws.onclose = function () {
        if(funcClose)
        	funcClose(ws);
    }

    ws.onbeforeunload = function () {
        ws.close();
    }

    return ws;
}
