let jsVideo = {};
window.jsVideo = jsVideo;
/*
 * 捕获摄像头
*/
jsVideo.initVideo = function (videoid) {
    let video = document.getElementById(videoid);
    let constraints = {
        video: {width: 500, height: 500},
        audio: true
    };
    if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
            jsVideo.dook(video, stream);
        }).catch(function(err){
            jsVideo.doerr(err);
        });
    } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, function(stream){
            jsVideo.dook(video, stream);
        }, function(err){
            jsVideo.doerr(err);
        });
    } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, function(stream) {
            jsVideo.dook(video, stream);
        }, function(err){
            jsVideo.doerr(err);
        });
    } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, function (stream) {
            jsVideo.dook(video, stream);
        }, function(err){
            jsVideo.doerr(err);
        });
    }
    return video;
}
jsVideo.dook = function(video, stream){
    //兼容webkit核心浏览器
    // let CompatibleURL = window.URL || window.webkitURL;
    //将视频流设置为video元素的源
    //video.src = CompatibleURL.createObjectURL(stream);
    video.srcObject = stream;
    video.play();
}
jsVideo.doerr = function(err){
    console.log(`访问用户媒体设备失败${err.name}, ${err.message}`);
}
jsVideo.takePhoto = function(canvasid, video) {
    //获得Canvas对象
    let canvas = document.getElementById(canvasid);
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 500, 500);

}
