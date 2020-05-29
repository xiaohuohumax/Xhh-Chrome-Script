// 异步获取信息方法
function sendMessageToContentScript(message) {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
                resolve(response);
            });
        });
    })
}
// 异步存储数据
function storageSet(data) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set(data, () => {
            resolve(true);
        });
    })
}
// 异步获取数据
function storageGet(data, name) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(data, (response) => {
            resolve(JSON.parse(response[name]));
        });
    });
}
// 前端发送日志信息
let Log = {
    information: async (text) => {
        await sendMessageToContentScript({ cmd: 'setLogInformation', value: `[${getManifestInf().name}][提示]${text}` });
    },
    warning: async (text) => {
        await sendMessageToContentScript({ cmd: 'setLogWarning', value: `[${getManifestInf().name}][警告]${text}` });
    },
    error: async (text) => {
        await sendMessageToContentScript({ cmd: 'setLogError', value: `[${getManifestInf().name}][错误]${text}` });
    },
}
// API 过滤
function apiFilter(apis, re, flag = false) {
    try {
        let Reg = RegExp(re, 'g');
        return apis.filter((val) => {
            return Reg.test(val.name);
        });
    } catch (error) {
        Log.warning(`正则表达式错误 ${error}`);
        return flag ? apis : [];
    }
}
// 添加网址匹配
function addScript(allowUrl, nowUrl) {
    let flag = false;
    allowUrl.some((val) => {
        try {
            if (val.test(nowUrl)) {
                flag = true;
                return true;
            }
        } catch (e) { }
    })
    return flag;
}

// 模块显示
function blockShow(block) {
    block.style.display = 'block';
}
// 获取manifest.json
function getManifestInf() {
    return chrome.runtime.getManifest();
}
// api添加number
function APIAddNmber(api) {
    return api.map((val, index) => {
        val.number = index;
        return val;
    });
}