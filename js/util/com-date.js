let jsDate = {};
window.jsDate = jsDate;
/*
 *转换格式日期
*/
jsDate.dateFmt = function(date, fmt)
{
    if(!fmt)
        fmt = "yyyy-MM-dd hh:mm:ss";
    let o = {
        "M+" : date.getMonth()+1,     //月份
        "d+" : date.getDate(),     //日
        "h+" : date.getHours(),     //小时
        "m+" : date.getMinutes(),     //分
        "s+" : date.getSeconds(),     //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S" : date.getMilliseconds()    //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

jsDate.getZhDate = function(){
    var d = new Date();
    var week;
    switch (d.getDay()){
        case 1: week="星期一"; break;
        case 2: week="星期二"; break;
        case 3: week="星期三"; break;
        case 4: week="星期四"; break;
        case 5: week="星期五"; break;
        case 6: week="星期六"; break;
        default: week="星期天";
    }
    var years = d.getFullYear();
    var month = d.getMonth()+1;
    var days = d.getDate();
    var ndate = years+"年"+month+"月"+days+"日 "+" "+week;
    return ndate;
}
/*
 *睡眠
*/
jsDate.sleep = function(delay) {
    let start = (new Date()).getTime();
    while((new Date()).getTime() - start < delay) {
        continue;
    }
}
/*
 *获取当前时间
*/
jsDate.getNowTime = function()
{
    return dateFmt(new Date());
}
/*
 *获取当前日期
*/
jsDate.getNowDate = function()
{
    return jsDate.dateFmt(new Date(), 'yyyy-MM-dd');
}
/*
 *页面调用 天气信息
*/
jsDate.getDayInfo = function(domid)
{
    //101100101 <![CDATA[<3级]]>
    $.ajax({
        url:'http://wthrcdn.etouch.cn/weather_mini?citykey=101100101',
        dataType: 'text',
        success: function (result) {
            let obj = JSON.parse(result);
            let city = obj.data.city;
            let wendu = obj.data.wendu;
            let kqzl = obj.data.aqi;
            let dayinfo = obj.data.forecast[0];
            let fengli = dayinfo.fengli.substring(9, dayinfo.fengli.indexOf('级') + 1);
            let ganmao = obj.data.ganmao;
            $("#" + domid).html( jsDate.getZhDate() + "&nbsp;&nbsp;" + city + "&nbsp;&nbsp;" +
                dayinfo.type + "&nbsp;&nbsp;" +
                wendu + "℃(" + dayinfo.low + "&nbsp;-&nbsp;" + dayinfo.high + ")&nbsp;&nbsp;" +
                dayinfo.fengxiang + fengli + "&nbsp;&nbsp;(" + ganmao + ")"
            );
        }
    });
}

