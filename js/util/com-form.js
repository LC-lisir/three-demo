/*
 *  定义jsForm类
*/
let gIsMouseDown = false;
let gLastPoint = {};
let jsForm = {};
window.jsForm = jsForm;
/*
 *  获取formJSON格式数据
*/
jsForm.getFormJson = function (formId) {
    var data = {};
    $("#" + formId).serializeArray().map(function(x){
        if (data[x.name] !== undefined) {
            if (!data[x.name].push) {
                data[x.name] = [data[x.name]];
            }
            data[x.name].push(x.value || '');
        } else {
            data[x.name] = x.value || '';
        }
    });
    return data;
}
/*
 *  获取父窗体window
*/
jsForm.getParentWnd = function(){
    if (window.opener != null)
        return window.opener;
    else
    if (window.parent != null)
        return window.parent;
    else
        return null;
}
/*
 *  获取顶层窗体window
*/
jsForm.getTopWnd = function(wnd) {
    var fwnd = self;
    if(wnd)
        fwnd = wnd;

    if(fwnd.opener == fwnd || fwnd.top == fwnd || fwnd.parent == fwnd)
        return fwnd;

    if (fwnd.opener)
        return jsForm.getTopWnd(fwnd.opener);
    else
    if (fwnd.parent)
        return jsForm.getTopWnd(fwnd.parent);
    else
        return fwnd;
}
/*
 * 获取上层窗体传来的参数
*/
jsForm.getWndParams = function(){
    if (window.opener != null)
        return window.opener.gParam;
    else
    if (window.parent != null)
        return window.parent.gParam;
    else
        return {};
}
/*
 * 打开新窗体标签页
*/
jsForm.openTab = function(url){
    window.open(url,'_blank');
}
/*
 * 弹出新窗体 非模式窗体
*/
jsForm.openWnd = function(url, width, height, name){
    let sname = "_blank";
    if(name)
        sname = name;
    let top = (window.screen.availHeight - height)/2 - 30;
    let left= (window.screen.availWidth - width)/2 -10;
    if(jsForm.getBrowser() == 'Chrome') {
        top += window.screen.availTop;
        left += window.screen.availLeft;
    }
    let param = "width=" + width + ","
        + "height=" + height + ","
        + "top=" + top + ","
        + "left=" + left + ","
        + "location=no,"
        + "menubar=no,"
        + "resizable=no,"
        + "scrollbars=yes,"
        + "status=no,"
        + "toolbar=no";
    window.open(url,sname, param);
}
/*
 * 弹出模式窗体
 */
jsForm.openModal = function(url, title, width, height){
    let shtml = "";
    shtml = " <dialog id = 'dlg'  style='border-color: #f6f6f6;position: absolute;padding: 0px;width: " + width + "px;'>"
        + "   <div style='background-color:whitesmoke; height: 35px;color: #1890ff;font-size: 18px;font-weight: bold;padding-top: 5px; padding-left: 10px;'>"
        + "       <i  class=\"el-icon-rank\"></i><span style='cursor:move;padding-left: 10px;' >" + title + "</span>"
        + "       <div style='float: right;padding-right: 10px;font-weight: bold;cursor: pointer;'>"
        + "       <i  class=\"el-icon-full-screen\" onclick=\"jsForm.fullScreen('"+ title + "','" + url +"')\" style='padding-right: 10px;'></i>"
        + "       <i  class=\"el-icon-close\" onclick=\"jsForm.closeModal()\"></i>"
        + "       </div>"
        + "  </div>"
        + "	<iframe src=" + url + " name='fmtab" + url + "' frameborder='0' width='100%' height=" + height + "></iframe>"
        + " </dialog>";
    if(window.parent == window.top && window.frameElement )
    {
        window.parent.$('body').prepend(shtml )
        window.parent.jsForm.dlgDragEvt('dlg');
        window.parent.document.getElementById('dlg').showModal();

    }else{
        $('body').prepend(shtml);
        jsForm.dlgDragEvt('dlg');
        document.getElementById('dlg').showModal();
    }
}
/*
 * 拖动模式窗体动作
 */
jsForm.dlgDragEvt = function(dlgId){
    $('#' + dlgId).on('mousedown',function (e) {
        gIsMouseDown = true;
        gLastPoint.x = e.pageX;
        gLastPoint.y = e.pageY;
    }).on('mousemove',function (e) {
        if (gIsMouseDown){
            var dialog = $('#'+dlgId);
            var targetX = parseInt(dialog.css('left') )+ e.pageX - gLastPoint.x;
            var targetY = parseInt(dialog.css('top')) + e.pageY -gLastPoint.y;//限制在窗口内
            if (targetX <= 0){
                targetX = 0;
            }
            if (targetX > $(window).width() - dialog.width()){
                targetX =  $(window).width() - dialog.width();
            }
            if (targetY < 0){
                targetY = 0;
            }
            if (targetY > $(window).height() - dialog.height()){
                targetY = $(window).height() - dialog.height();
            }
            dialog.css('left',targetX +'px');
            dialog.css('top', targetY + 'px');
            gLastPoint.x = e.pageX;
            gLastPoint.y = e.pageY;
        }
    }).on('mouseup',function () {
        gIsMouseDown = false;
        gLastPoint = {};
    })
}
/*
 * 打开新窗体，传递参数
*/
jsForm.showForm = function(url, width, height, param, title)
{
    let a = url.split("/");
    let wndname = a[a.length - 1];
    console.log(wndname);
    let w = 1200;
    let h = 800;
    if(width)
        w = width;
    if(height)
        h = height;
    if(title && window.parent == window.top && window.frameElement)
        parent.gParam = param;
    else
        gParam = param;

    if(title)
        jsForm.openModal(url, title, w, h);
    else
        jsForm.openWnd(url, w, h, wndname);
}
/*
 * 模式窗体最大化
*/
jsForm.fullScreen = function(title, url){
    if(window.top = window && window.frames['fmtab' + url].app)
    {
        window.gFormData = window.frames['fmtab' + url].app.formData;
    }
    app.toClick(title, url, url);
    $('#dlg').remove();
}
/*
 * 关闭模式窗体
*/
jsForm.closeModal = function(){
    if(window.parent == window.top && window.frameElement ) {
        window.parent.$('#dlg').remove();
    }else
    {
        $('#dlg').remove();
    }
}
/*
 * 验证码
*/
jsForm.doCheckCode = function(imgid, url)
{
    $("#" + imgid).attr("src",url + "?nocache="+new Date().getTime());
}
/*
 * 判断浏览器
*/
jsForm.getBrowser = function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    if (userAgent.indexOf("Opera") > -1) {
        return "Opera"
    };
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    }
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    };
}
/*
 * 消息对话框
*/
jsForm.infoBox = function(owner, msg){
    owner.$alert(msg, '提示', {
        confirmButtonText: '确定',
        type: 'info'
    });
}
/*
 * 警告对话框
*/
jsForm.warnBox = function(owner, msg){
    owner.$alert(msg, '警告', {
        confirmButtonText: '确定',
        type: 'warning'
    });
}
/*
 * 错误对话框
*/
jsForm.errBox = function(owner, msg){
    owner.$alert(msg, '错误', {
        confirmButtonText: '确定',
        type: 'error'
    });
}
/*
 * 确认对话框
*/
jsForm.confirmBox = function(owner, msg, fofunc){
    owner.$confirm(msg, '确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info',
        callback: (action,instance) => {
            console.log(action);
            console.log(instance );
        }
    });
}
/*
 * 确认promise对象对话框
*/
jsForm.promiseBox = function(owner, msg, dook, docancel){
    owner.$confirm(msg, '确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
    }).then(() => {
        if(dook)
            dook();
    }).catch(() => {
        if(doerr)
            docancel();
    });
}
/*
 * 提示消息
*/
jsForm.infoMsg = function(owner, msg){
    owner.$message({
        showClose: true,
        message: msg,
        type: 'info'
    });
}
/*
 * 警告消息
*/
jsForm.warnMsg = function(owner, msg){
    owner.$message({
        showClose: true,
        message: msg,
        type: 'warning'
    });
}
/*
 * 错误消息
*/
jsForm.errMsg = function(owner, msg){
    owner.$message({
        showClose: true,
        message: msg,
        type: 'error'
    });
}
/*
 * 成功消息
*/
jsForm.okMsg = function(owner, msg){
    owner.$message({
        showClose: true,
        message: msg,
        type: 'success'
    });
}
/*
 * 提示通知
*/
jsForm.infoNotify = function(owner, msg){
    owner.$notify.info({
        title: '消息',
        message: msg,
        type: 'info'
    });
}
/*
 * 成功通知
*/
jsForm.okNotify = function(owner, msg){
    owner.$notify.info({
        title: '成功',
        message: msg,
        type: 'success'
    });

}
/*
 * 错误通知
*/
jsForm.errNotify = function(owner, msg){
    owner.$notify.info({
        title: '错误',
        message: msg,
        type: 'error'
    });

}
/*
 * 警告通知
*/
jsForm.warnNotify = function(owner, msg){
    owner.$notify.info({
        title: '警告',
        message: msg,
        type: 'warn'
    });

}
/*
 * 警告通知
*/
jsForm.prompt = function(owner, title, dook, docancel){
    owner.$prompt(title, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        //inputPattern: //,
        //inputErrorMessage: '邮箱格式不正确'
    }).then(({ value }) => {
        if(dook)
            dook(value);
    }).catch(() => {
        if(docancel)
            docancel();
    });
}
