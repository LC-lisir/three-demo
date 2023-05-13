/*
    yxh-test-key	a9f6adef4b22609007bc379b67ce177e
    <script src="https://webapi.amap.com/maps?v=2.0&key=a9f6adef4b22609007bc379b67ce177e"></script>
*/
var GdMap = function(div, opt, plugs){
        //私有变量
        this._div = div;
        this._opt = {
            zoom:11,//级别
            viewMode:'3D'//使用3D视图
        };
        if(opt != null && !$.isEmptyObject(opt))
            this._opt = $.extend({}, this._opt, opt);
        this._plugs = ['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'];
        if(plugs != null && $.inArray(plugs) && plugs.length > 0)
            this._plugs = plugs;
        //初始化地图
        this._map = new AMap.Map(this._div, this._opt);
        //局部变量
        let fopt = this._opt;
        let fmap = this._map;
        let fplugs = this._plugs;
        //异步加载插件
        AMap.plugin(fplugs, function(){
            fplugs.forEach(function(item){
                let obj =  eval("new " + item + "()");
                fmap.addControl(obj);
            })
        });
}
GdMap.prototype = {
    addPlugin: function(plugin){
            if(plugin == null) return;
            if($.isArray(plugin))
            {
                plugin.forEach(function(item){
                    let obj =  eval("new " + item + "()");
                     this._map.addControl(obj);
                })
            }else{
                let obj =  eval("new " + plugin + "()");
                this._map.addControl(obj);
            }
        },
    locate: function(dook, doerr){
        let fmap = this._map;
        AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            })
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', function(data){
                 fmap.setCenter(data.position);
                if(dook )
                    dook(data);
            });
            AMap.event.addListener(geolocation, 'error', doerr)
        })
    },
    setCenter: function(point){
        this._map.setCenter(point);
    },
    setZoom: function(zoom){
        this._map.setZoom(zoom);
    },
    addMarker: function(point, icon, title, doclick){
        let marker = new AMap.Marker({
            position: point,
            offset: new AMap.Pixel(-10, -10),
            icon: icon, // 添加 Icon 图标 URL
            title: title
        });
        this._map.add(marker);
        marker.on('click',doclick);
        return marker;
    },
    addPolyline: function(points, weight, color){
        let polyline = new AMap.Polyline({
            path: points,
            borderWeight: weight, // 线条宽度，默认为 1
            strokeColor: color, // 线条颜色
            lineJoin: 'round' // 折线拐点连接处样式
        });
        this._map.add(polyline);
        return polyline;
    },
    addMassMarks: function(icons, data, doclick){
        if(!icons || !data) return;
        if(icons.length < 1 || data.length < 1) return;
        let styles = [];
        icons.forEach(function(item){
            let sty = {url:item.url, anchor: new AMap.Pixel(item.pixel, item.pixel), size: new AMap.Size(item.size, item.size)};
            styles.push(sty);
        });
        console.log(styles);
        let mass = new AMap.MassMarks(data, {
            opacity: 0.8,
            zIndex: 5,
            cursor: 'pointer',
            style: styles
        });
        let lbmark = new AMap.Marker({content: ' ', map: this._map});
        mass.on('mouseover', function (e) {
            lbmark.setPosition(e.data.lnglat);
            lbmark.setLabel({content: e.data.name})
        });
        mass.on('click', doclick);
        mass.setMap(this._map);
    },
    addTrack: function(points, iconUrl){
        let iconmk = new AMap.Marker({
            map: this._map,
            position: [116.478935,39.997761],
            icon: iconUrl,
            offset: new AMap.Pixel(-20, -53),
            autoRotation: true,
            angle:-90,
        });
        let polyline = new AMap.Polyline({
            map: this._map,
            path: points,
            showDir:true,
            strokeColor: "#28F",  //线颜色
            // strokeOpacity: 1,     //线透明度
            strokeWeight: 6,      //线宽
            // strokeStyle: "solid"  //线样式
        });
        let passedPolyline = new AMap.Polyline({
            map: this._map,
            // path: lineArr,
            strokeColor: "#AF5",  //线颜色
            // strokeOpacity: 1,     //线透明度
            strokeWeight: 6,      //线宽
            // strokeStyle: "solid"  //线样式
        });
        iconmk.on('moving', function (e) {
            passedPolyline.setPath(e.passedPath);
        });
        this._map.setFitView();
        return iconmk;
    }
}

