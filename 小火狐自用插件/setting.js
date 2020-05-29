let setting = {
    /* 记忆设置 */
    panChoHistory: true, // 是否打开 资源脚本 的选择历史(加载新页面时会自动使用上一个页面最后一次的选择)
    vipChoHistory: true, // 是否打开 视频脚本 的选择历史(加载新页面时会自动使用上一个页面最后一次的选择)
    /* 数量设置 */
    panShowMax: -1, // 资源脚本最大显示数量 <=0 无限制 >0 限制数量
    vipShowMax: -1, // 视频脚本显示最大数量 <=0 无限制 >0 限制数量
    /* 初始筛选 */
    panShowRe: '', // 资源脚本接口筛选 正则表达式 默认空着不过滤
    vipShowRe: '', // 视频脚本接口筛选 正则表达式 默认空着不过滤
    /* 日志颜色 */
    logInf: 'teal', // 正常提示颜色
    logErr: 'tomato', // 错误提示颜色
    logWar: 'plum', // 警告提示颜色
    /* 匹配网址 */
    vipAllowUrl: [
        /^\w+\:\/\/\w+\.iqiyi\.com/i,// 爱奇艺
        /^\w+\:\/\/\w+\.youku\.com/i,// 优酷
        /^\w+\:\/\/\w+\.le\.com/i,// 乐视
        /^\w+\:\/\/\w+\.letv\.com/i,// 乐视
        /^\w+\:\/\/v\.qq\.com/i,// 腾讯
        /^\w+\:\/\/\w+\.tudou\.com/i,// 土豆
        /^\w+\:\/\/\w+\.mgtv\.com/i,// 芒果
        /^\w+\:\/\/film\.sohu\.com/i,// 搜狐
        /^\w+\:\/\/tv\.sohu\.com/i,// 搜狐
        /^\w+\:\/\/\w+\.acfun\.cn\/v/i,// acfun
        /^\w+\:\/\/\w+\.bilibili\.com/i,// bilibili
        /^\w+\:\/\/vip\.1905\.com\/play/i,// 1905电影网
        /^\w+\:\/\/\w+\.pptv\.com/i,// pp视频
        /^\w+\:\/\/v\.yinyuetai\.com\/video/i,// 音悦台
        /^\w+\:\/\/v\.yinyuetai\.com\/playlist/i,// 音悦台
        /^\w+\:\/\/\.fun\.tv\/vplay/i,// 风行视频
        /^\w+\:\/\/\w+\.wasu\.cn\/Play\/show/i,// 华数
        /^\w+\:\/\/\w+\.56\.com/i// 我乐视频
    ],
    panAllowUrl: [
        /.*/i // 全部
    ]
}