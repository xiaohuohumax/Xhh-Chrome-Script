
(function (global, setting) {
    function XHHTools() { }
    // 修改log颜色
    XHHTools.setLogColor = function ({ information = undefined, warning = undefined, error = undefined }) {
        information ? setting.informationColor = information : '';
        warning ? setting.warningColor = warning : '';
        error ? setting.errorColor = error : '';
    }
    /* ============================================= 随机工具 ============================================= */
    XHHTools.randomNumber = function (start, end) {// 获取范围内随机整数
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }
    XHHTools.randomColor = function (opacity = 1) {// 获取随机颜色
        return `rgba(${XHHTools.randomNumber(0, 255)},${XHHTools.randomNumber(0, 255)},${XHHTools.randomNumber(0, 255)},${opacity})`;
    }
    /* ============================================= /随机工具 ============================================= */
    /* ============================================= 时间工具 ============================================= */
    XHHTools.msToText = function (time) { // 时间戳转字符串
        let date = new Date(time);
        return `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
    }
    /* ============================================= /时间工具 ============================================= */
    /* ============================================= DOM工具 ============================================= */
    XHHTools.c = function (arg) { // 创建对象
        var res = document.createElement('div');
        res.innerHTML = arg;
        return res.childNodes;
    }
    XHHTools.q = function (name, doc = document) { // 寻找第一个
        return doc.querySelector(name);
    }
    XHHTools.qa = function (name, doc = document) { // 寻找全部
        return doc.querySelectorAll(name);
    }
    /* ============================================= /DOM工具 ============================================= */
    /* ============================================= 日志工具 ============================================= */
    XHHTools.logInformation = function (...infs) {
        console.log(`%c${infs.join('')}`, `color:${setting.informationColor}`);
    }
    XHHTools.logError = function (...err) {
        console.log(`%c${err.join('')}`, `color:${setting.errorColor}`);
    }
    XHHTools.logWarning = function (...war) {
        console.log(`%c${war.join('')}`, `color:${setting.warningColor}`);
    }
    /* ============================================= /日志工具 ============================================= */
    /* ============================================= 网页工具 ============================================= */
    // 切换目标网址 打开方式 true 新窗口 false 当前窗口
    XHHTools.setUrl = function (url, flag = true) {
        flag ? global.open(url) : global.location.assign(url);
    }
    // 获取当前url
    XHHTools.getUrl = function () {
        return global.location.href;
    }
    /* ============================================= /网页工具 ============================================= */
    global.XHHTools = XHHTools;
})(typeof (window) !== "undefined" ? window : this, {
    // 日志颜色
    informationColor: 'teal',
    errorColor: 'tomato',
    warningColor: 'plum'
});

// 更改log颜色
XHHTools.setLogColor({
    information: setting.logInf,
    warning: setting.logErr,
    error: setting.logWar
});


