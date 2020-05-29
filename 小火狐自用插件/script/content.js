chrome.runtime.sendMessage({ cmd: 'pageStart', value: window.location.href });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.cmd) {
        case 'getUrl':
            sendResponse(window.location.href);
            break;
        case 'setLogInformation':
            XHHTools.logInformation(request.value);
            break;
        case 'setLogWarning':
            XHHTools.logWarning(request.value);
            break;
        case 'setLogError':
            XHHTools.logError(request.value);
            break;
        default:
            sendResponse('cmd error!');
    }
});