/*
 *  定义jsCheck类
*/
let jsCheck = {};
window.jsCheck = jsCheck;
/**
 * 表单验证
 */
js.isNull = function (val){
    let rtn = false;
    var str = val.trim();
    if(str.length==0)
        rtn = true;
    return rtn;
}
/**
 * 判断日期类型是否为YYYY-MM-DD格式的类型
 */
jsCheck.isDate = function (val){
    let rtn = false;
    var str = val.trim();
    if(str.length != 0){
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
        var r = str.match(reg);
        if(r == null)
            rtn = false;
        else
            rtn = true;
    }else
        rtn  = false;
    return rtn;
}
/**
 * 判判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
 */
jsCheck.isDateTime = function (val){
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if(r == null)
          rtn  = false;
        else
          rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断日期类型是否为hh:mm:ss格式的类型
 */
jsCheck.isTime = function (val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length != 0){
        reg=/^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/
        if(!reg.test(str)){
            rtn = false;
        }else
            rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断输入的字符是否为英文字母
 */
jsCheck.isLetter = function (val)
{
    let rtn  = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[a-zA-Z]+$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断输入的字符是否为数字
 */
jsCheck.isNumberChar = function isNumberChar(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[0-9]*$/;
	    if(!reg.test(str)){
	       rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断输入的字符是否为数值
 */
jsCheck.isNumber = function (val)
{
    let rtn = false;
    var str = val.trim();
    if(IsNaN(str)){
        rtn = false;
    }else
        rtn = true;
}
/**
 * 判断输入的字符是否为整数
 */
jsCheck.isInteger = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[-+]?\d*$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断输入是否为两位小数 ^(\d+|\d+\.\d{1,2})$/;
 */
jsCheck.isFloat = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^(\d+|\d+\.\d{1,2})$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 判断输入的字符是否为:a-z,A-Z,0-9
 */
jsCheck.isChar = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[a-zA-Z0-9_]+$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = true;
    return rtn;
}
/**
 * 判断输入的字符是否为中文
 */
jsCheck.isChinese = function (val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[\u0391-\uFFE5]+$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = true;
    return rtn;
}
/**
 * 判断输入的EMAIL格式是否正确
 */
jsCheck.isEmail = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 验证身份证号（15位或18位数字）：
 */
jsCheck.isIdentityCode = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^\d{15}|\d{}18$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
/**
 * 验证用户密码: 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
 */
jsCheck.isPwdChar = function(val)
{
    let rtn = false;
    var str = val.trim();
    if(str.length!=0){
	    reg=/^[a-zA-Z]\w{5,17}$/;
	    if(!reg.test(str)){
	        rtn = false;
	    }else
	        rtn = true;
    }else
        rtn = false;
    return rtn;
}
