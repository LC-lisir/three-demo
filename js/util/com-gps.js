let pi = 3.14159265358979324;
let pi_a = 6378245.0;
let pi_e = 0.00669342162296594323;
let pi_x = 3.14159265358979324*3000.0/180.0;

let jsMap = {};
window.jsMap = jsMap;
//***********************************************************************************
/*
 * 世界大地坐标转为百度坐标
*/
jsMap.wgsToBd = function(lat, lng){
    let wgs2gcjR = wgs2gcj(lat, lng);
    let gcj2bdR = gcj2bd(wgs2gcjR[0], wgs2gcjR[1]);
    return gcj2bdR;
}
/*
 * 火星坐标转换为百度
*/
jsMap.gcjToBd = function(lat, lng){
    let x = lng, y = lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi_x);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi_x);
    let bd_lng = z * Math.cos(theta) + 0.0065;
    let bd_lat = z * Math.sin(theta) + 0.006;
    let result = [];
    result.push(bd_lat);
    result.push(bd_lng);
    return result;
}
/*
 * 百度转换为火星
*/
jsMap.bdToGcj= function(lat, lng){
    let x = lng - 0.0065, y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi_x);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi_x);
    let gg_lng = z * Math.cos(theta);
    let gg_lat = z * Math.sin(theta);
    let result = [];
    result.push(gg_lat);
    result.push(gg_lng);
    return result;
}
/*
 * 大地转换为火星
*/
jsMap.wgsToGcj = function(lat, lng){
    let dLat = jsMap.transformLat(lng - 105.0, lat - 35.0);
    let dLng = jsMap.transformLon(lng - 105.0, lat - 35.0);
    let radLat = lat / 180.0 * pi;
    let magic = Math.sin(radLat);
    magic = 1 - pi_e * magic * magic;
    let sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((pi_a * (1 - pi_e)) / (magic * sqrtMagic) * pi);
    dLng = (dLng * 180.0) / (pi_a / sqrtMagic * Math.cos(radLat) * pi);
    let mgLat = lat + dLat;
    let mgLng = lng + dLng;
    let result = [];
    result.push(mgLat);
    result.push(mgLng);
    return result;
}
/*
 * lat坐标转换
*/
jsMap.transformLat = function(lat, lng){
    let ret = -100.0 + 2.0 * lat + 3.0 * lng + 0.2 * lng * lng + 0.1 * lat * lng + 0.2 * Math.sqrt(Math.abs(lat));
    ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * pi) + 40.0 * Math.sin(lng / 3.0 * pi)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lng / 12.0 * pi) + 320 * Math.sin(lng * pi  / 30.0)) * 2.0 / 3.0;
    return ret;
}
/*
 * lng坐标转换
*/
jsMap.transformLng= function(lat, lng){
    let ret = 300.0 + lat + 2.0 * lng + 0.1 * lat * lat + 0.1 * lat * lng + 0.1 * Math.sqrt(Math.abs(lat));
    ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
    return ret;
}
/*
 * 大地坐标批量转换百度坐标
*/
jsMap.wgsBatchBd = function(wgs){
    let bds = [];
    $.each(wgs, function(index, pt){
        let _t = jsMap.wgsToBd(pt.lat, pt.lng);
        let _BPoint = new BMap.Point(_t[1], _t[0]);
        bds.push(_BPoint);
    });
    return bds;
}
