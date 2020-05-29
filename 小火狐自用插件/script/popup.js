(async () => {
    // 获取当前页面网址
    let nowUrl = await sendMessageToContentScript({ cmd: 'getUrl' });
    /* 资源脚本 */
    (async () => {
        // 网站匹配
        if (!addScript(setting.panAllowUrl, nowUrl)) { return; } else { blockShow(XHHTools.q('#appPanItem')); };
        // 添加编号
        let panAPI = APIAddNmber(panApis);
        // 限制数量
        panAPI = setting.panShowMax > 0 ? panAPI.slice(0, setting.panShowMax) : panAPI;
        // 内容过滤
        panAPI = apiFilter(panAPI, setting.panShowRe, true);
        let appPanFindSum = XHHTools.q('.appPanFindSum');
        let appPanFindInput = XHHTools.q('.appPanFindInput');
        let appPanSureInput = XHHTools.q('.appPanSureInput');
        let appPanList = XHHTools.q('.appPanList');
        // 从本地获取保存数据
        let nowCho = setting.panChoHistory ? await storageGet({ panCho: JSON.stringify(panAPI[0]) }, 'panCho') : panAPI[0];

        function addItem(re = '') {
            // 提示当前选中内容
            appPanSureInput.setAttribute('placeholder', `回车搜索-${nowCho.name}`);
            // 删除所有子元素
            appPanList.innerHTML = '';
            // 匹配过滤
            let matchArray = apiFilter(panAPI, re);
            // 设置提示长度
            appPanFindSum.innerHTML = matchArray.length;
            if (matchArray.length == 0) {
                appPanList.innerHTML = "<div class='d-flex border rounded px-2 mb-1 py-1'>木有结果~~~</div>";
            } else {
                // 生成对象
                matchArray.forEach((val, index) => {
                    let appPanItem = XHHTools.c(`<div title="${val.name}" class="${nowCho.number == val.number ? 'appItemCho' : ''} d-flex border rounded px-2 mb-1 py-1">
                        <div class="">${index + 1}</div>
                        <div class="ml-2 w-50">${val.name}</div>
                    </div>`)[0];

                    appPanList.append(appPanItem);
                    // 添加点击事件
                    appPanItem.addEventListener('click', () => {
                        nowCho = val;
                        // 修改选中标识
                        XHHTools.q('.appItemCho', appPanList) && XHHTools.q('.appItemCho', appPanList).classList.remove('appItemCho');
                        appPanItem.classList.add('appItemCho');
                        appPanSureInput.setAttribute('placeholder', `回车搜索-${nowCho.name}`);
                        storageSet({ panCho: JSON.stringify(nowCho) });
                    })
                })
            }
        }
        addItem();
        // 输入监视
        appPanFindInput.addEventListener('input', () => {
            addItem(appPanFindInput.value);
        });
        // 回车监视
        appPanSureInput.addEventListener('keydown', (event) => {
            var e = event || window.event;
            // 按 Eenter
            if (e && e.keyCode == 13) {
                if (appPanSureInput.value.trim()) {
                    chrome.tabs.create({ url: nowCho.url.replace('%sv%', appPanSureInput.value) });
                }
            }
        })
    })();
    /* VIP脚本 */
    (async () => {
        // 网站匹配
        if (!addScript(setting.vipAllowUrl, nowUrl)) { return; } else { blockShow(XHHTools.q('#appVipItem')); };
        // 添加编号
        let vipAPI = APIAddNmber(urlApis);
        // 限制数量
        vipAPI = setting.vipShowMax > 0 ? vipAPI.slice(0, setting.vipShowMax) : vipAPI;
        // 内容过滤
        vipAPI = apiFilter(vipAPI, setting.vipShowRe, true);

        let appVipFindSum = XHHTools.q('.appVipFindSum');
        let appVipFindInput = XHHTools.q('.appVipFindInput');
        let appVipList = XHHTools.q('.appVipList');
        // 获取本地数据
        let nowCho = setting.vipChoHistory ? await storageGet({ vipCho: JSON.stringify(vipAPI[0]) }, 'vipCho') : vipAPI[0];
        function addItem(re = '') {
            // 删除所有子元素
            appVipList.innerHTML = '';
            // 匹配过滤
            let matchArray = apiFilter(vipAPI, re);
            // 设置提示长度
            appVipFindSum.innerHTML = matchArray.length;
            if (matchArray.length == 0) {
                appVipList.innerHTML = "<div class='d-flex border rounded px-2 mb-1 py-1'>木有结果~~~</div>";
            } else {
                // 生成对象
                matchArray.forEach((val, index) => {
                    let appVipItem = XHHTools.c(`<div title="${val.name}" class="${nowCho.number == val.number ? 'appItemCho' : ''} d-flex border rounded px-2 mb-1 py-1">
                        <div class="">${index + 1}</div>
                        <div class="ml-2 w-50">${val.name}</div>
                    </div>`)[0];

                    appVipList.append(appVipItem);
                    // 添加点击事件
                    appVipItem.addEventListener('click', () => {
                        nowCho = val;
                        // 修改选中标识
                        XHHTools.q('.appItemCho', appVipList) && XHHTools.q('.appItemCho', appVipList).classList.remove('appItemCho');
                        appVipItem.classList.add('appItemCho');
                        storageSet({ vipCho: JSON.stringify(nowCho) });
                        chrome.tabs.create({ url: nowCho.url + nowUrl });
                    })
                })
            }
        }
        addItem();
        // 输入监视
        appVipFindInput.addEventListener('input', () => {
            addItem(appVipFindInput.value);
        });
    })();
})();