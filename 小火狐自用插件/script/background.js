let manifest = getManifestInf();

chrome.runtime.onMessage.addListener(function (request) {
    switch (request.cmd) {
        case 'pageStart':
            Log.information(`${manifest.name}加载成功 版本:${manifest.version}`);
            Log.information(`PAN资源模块 已${addScript(setting.panAllowUrl, request.value) ? "成功加载" : "放弃加载"}`);
            Log.information(`VIP资源模块 已${addScript(setting.vipAllowUrl, request.value) ? "成功加载" : "放弃加载"}`);
            Log.information(`模块已全部准备完成`);
            break;
        default:
            Log.information(`CMD 命令错误!!!`);
    }
});