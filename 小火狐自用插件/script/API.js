/* 资源搜索接口 */
var panApis = [
    { from: "https://www.dashengpan.com/", name: "大圣盘", url: "https://www.dashengpan.com/search?keyword=%sv%", },
    { from: "https://dalipan.com/", name: "大力盘", url: "https://www.dalipan.com/search?keyword=%sv%", },
    { from: "https://www.xiaozhaolaila.com/", name: "小昭来啦", url: "https://www.xiaozhaolaila.com/s/search?q=%sv%", },
    { from: "https://www.yunpanjingling.com/", name: "云盘精灵", url: "https://www.yunpanjingling.com/search/%sv%", },
    { from: "https://www.xiaokesoso.com/", name: "小可搜搜", url: "https://www.xiaokesoso.com/s/search?q=%sv%", },
    { from: "http://www.panmeme.com/", name: "盘么么", url: "http://www.panmeme.com/query?key=%sv%", },
    { from: "http://www.xiaobaipan.com/", name: "小白盘", url: "http://www.xiaobaipan.com/list-%sv%.html", },
    { from: "http://www.rufengso.net/", name: "如风搜", url: "http://www.rufengso.net/s/name/%sv%", },
    { from: "http://www.slimego.cn/", name: "史莱姆", url: "http://www.slimego.cn/search.html?q=%sv%", },
    { from: "http://www.kengso.com/", name: "坑搜网", url: "http://www.kengso.com/s?wd=%sv%", },
    { from: "http://www.repanso.com", name: "热盘搜", url: "http://www.repanso.com/q?wd=%sv%", },
    { from: "http://www.shiyue.org/", name: "十月搜索", url: "http://www.shiyue.org/s/%sv%", },
    { from: "https://www.lzpan.com/", name: "懒盘", url: "https://www.lzpan.com/search/title?kw=%sv%", },
    { from: "http://wx.haogow.com/", name: "西部维度", url: "http://wx.haogow.com/so?keyword=%sv%", },
    { from: "http://wx.xingtuhua.com/", name: "商务中国", url: "http://wx.xingtuhua.com/so?keyword=%sv%", },
    { from: "http://www.vpansou.com/", name: "V盘搜", url: "http://www.vpansou.com/query?wd=%sv%", },
    { from: "http://aizhaomu.com/", name: "创业招", url: "http://aizhaomu.com/search/kw%sv%", },
    { from: "http://www.sodu123.com/", name: "搜度", url: "http://www.sodu123.com/sodu/so.php?q=%sv%", },
    //以下的更新慢
    { from: "https://www.qzhou.com.cn/", name: "轻舟网", url: "https://www.qzhou.com.cn/search?keyword=%sv%", },
    { from: "http://www.59pan.com/", name: "59网盘", url: "http://www.59pan.com/search/%sv%/", },
    { from: "http://www.pansou.com/", name: "盘搜", url: "http://www.pansou.com/?q=%sv%", },
    { from: "https://www.fastsoso.cn/", name: "fastsoso", url: "https://www.fastsoso.cn/search?k=%sv%", },
    { from: "http://www.51sopan.cn/", name: "51搜盘", url: "http://www.51sopan.cn/s?wd=%sv%", },
    { from: "http://www.baiduyunsousou.com/", name: "暮无雪", url: "http://www.baiduyunsousou.com/search?kw=%sv%", },
    { from: "https://www.dupanbang.com/", name: "度盘帮", url: "https://www.dupanbang.com/q/%sv%", },
    { from: "http://www.xilinjie.com/", name: "西林街", url: "http://www.xilinjie.com/s?q=%sv%&t=pan", },
    { from: "http://www.vpanso.com/", name: "微盘搜", url: "http://www.vpanso.com/s?wd=%sv%", },
    { from: "https://www.xxhh360.com/", name: "云搜大师", url: "https://www.xxhh360.com/search?q=%sv%", },
    { from: "https://www.esopan.com/", name: "易搜盘", url: "https://www.esopan.com/share/kw%sv%", },
    { from: "http://www.panpanso.com/", name: "盘盘搜", url: "http://www.panpanso.com/baiduwp?qiehuan=1&sousuo=%sv%", },
    { from: "http://www.lsdy8.com/bdpan.php", name: "猎手电影", url: "http://www.lsdy8.com/bdpan.php?sousuo=%sv%", },
    { from: "https://jidanso.com/", name: "网盘传奇", url: "https://www.jidanso.com/index.php/search/?q=%sv%", },
    { from: "https://pan.here325.com/", name: "325搜", url: "https://pan.here325.com/s?q=%sv%", },
    { from: "http://chawangpan.com/", name: "盘搜大师", url: "http://chawangpan.com/paymentList.html?field=%sv%&pgtype=search&pg=1&type=1&btn=1&flag=1&ctype=1", },
    { from: "http://www.jisoupan.com/", name: "及搜盘", url: "http://www.jisoupan.com/search/%sv%.html", },
    { from: "http://www.jisoupan.com/", name: "多多下载", url: "http://www.jisoupan.com/search/%sv%.html", },
    { from: "http://www.sowangpan.com/", name: "搜网盘", url: "http://www.sowangpan.com/search/%sv%-0-全部-0.html", },
    { from: "https://www.soohub.com/", name: "soohub", url: "https://www.soohub.com/search/%sv%/1", },
    { from: "http://www.xxdown.cn/", name: "西西", url: "http://www.xxdown.cn/e/action/ListInfo.php?title=%sv%&mid=1&tempid=10&ph=1", },
    { from: "http://www.99baiduyun.com/", name: "99搜索", url: "http://www.99baiduyun.com/baidu/%sv%", },
    //以下是搜书的
    { from: "http://mebook.cc/", name: "小书屋", url: "http://mebook.cc/?s=%sv%", },
    { from: "http://www.ireadweek.com/index.php", name: "周读", url: "http://www.ireadweek.com/index.php?g=portal&m=search&a=index&keyword=%sv%", },
    { from: "http://ibooks.org.cn/", name: "读书小站", url: "http://ibooks.org.cn/?s=下载 %sv%", },
    { from: "https://sobooks.cc/", name: "sobooks", url: "https://sobooks.cc/search/%sv%", },
    { from: "http://neikuw.com/", name: "内酷网", url: "http://neikuw.com/?s=%sv%", },
    { from: "https://www.xssousou.com/", name: "小说搜搜", url: "https://www.xssousou.com/s/%sv%.html://neikuw.com/?s=%sv%", },
    { from: "http://www.tushupan.com", name: "图书盘", url: "http://www.tushupan.com/search?query=%sv%", },
];
/* 视频解析接口 */
var urlApis = [
    { name: "kiwi", url: "https://www.kiwi8.top/mov/s/?url=", title: "kiwi视频解析" },
    { name: "玩的嗨", url: "http://tv.wandhi.com/go.html?url=", title: "综合接口，一键VIP 更新可用【作者mark zhang】脚本的接口" },
    { name: "思古", url: "https://api.sigujx.com/?url=", title: "思古" },
    { name: "纯净接口:1907", url: "https://z1.m1907.cn/?jx=", title: "纯净接口:1907" },
    { name: "千叶", url: "https://yi29f.cn/vip.php?url=", title: "千叶" },
    { name: "927", url: "https://api.927jx.com/vip/?url=", title: "927" },
    { name: "H8", url: "https://www.h8jx.com/jiexi.php?url=", title: "H8" },
    { name: "星空", url: "https://jx.fo97.cn/?url=", title: "星空" },
    { name: "180", url: "https://jx.000180.top/jx/?url=", title: "180" },
    { name: "517", url: "https://cn.bjbanshan.cn/jx.php?url=", title: "517" },
    { name: "8B", url: "https://api.8bjx.cn/?url=", title: "8B" },
    { name: "人人", url: "https://vip.mpos.ren/v/?url=", title: "人人" },
    { name: "爸比云", url: "https://jx.1ff1.cn/?url=", title: "爸比云" },
    { name: "流氓凡", url: "https://jx.wslmf.com/?url=", title: "流氓凡" },
    { name: "石云", url: "https://jiexi.071811.cc/jx.php?url=", title: "石云" },
    { name: "凡凡", url: "https://jx.wslmf.com/?url=", title: "凡凡" },
    { name: "诺讯", url: "https://www.nxflv.com/?url=", title: "诺讯" },
    { name: "豪华啦", url: "https://api.lhh.la/vip/?url=", title: "豪华啦" },
    { name: "黑云", url: "https://jiexi.380k.com/?url=", title: "黑云" },
    { name: "ha12", url: "https://py.ha12.xyz/sos/index.php?url=", title: "ha12" },
    { name: "凉城", url: "https://jx.mw0.cc/?url=", title: "凉城" },
    { name: "千叶", url: "https://yi29f.cn/vip.php?url=", title: "千叶" },
    { name: "穷二代", url: "https://jx.ejiafarm.com/dy.php?url=", title: "穷二代" },
    { name: "17云", url: "https://www.1717yun.com/jx/ty.php?url=", title: "17云" },
    { name: "瀚晶", url: "https://beaacc.com/api.php?url=", title: "瀚晶" },
    { name: "大幕", url: "https://jx.52damu.com/dmjx/jiexi.php?url=", title: "大幕" },
    { name: "解析S", url: "https://jx.jiexis.com/?url=", title: "解析S" },
    { name: "金桥", url: "https://jqaaa.com/jx.php?url=", title: "金桥" },
    { name: "通用", url: "https://jx.598110.com/index.php?url=", title: "通用" },
    { name: "维多", url: "https://jx.ivito.cn/?url=", title: "维多" },
    { name: "二度", url: "https://jx.du2.cc/?url=", title: "二度" },
    { name: "石头解析", url: "https://jiexi.071811.cc/jx.php?url=", title: "手动点播放" },
    { name: "无名小站", url: "http://www.sfsft.com/admin.php?url=", title: "无名小站同源" },
    { name: "无名小站", url: "http://www.82190555.com/video.php?url=", title: "综合线路" },
    { name: "无名小站2", url: "http://www.wmxz.wang/video.php?url=", title: "转圈圈就换线路" },
    { name: "163人", url: "http://jx.api.163ren.com/vod.php?url=", title: "偶尔支持腾讯" },
    { name: "8090g", url: "http://api.oopw.top/jiexi/?url=", title: "8090g全网视频解析" },
    { name: "人人发布", url: "http://v.renrenfabu.com/jiexi.php?url=", title: "综合，多线路" },
    { name: "盘古解析", url: "http://607p.com/?url=", title: "综盘古解析" },
    { name: "思古解析", url: "http://bofang.online/?url=", title: "思古解析" },
    { name: "穷二代解析", url: "http://api.baiyug.vip/?url=", title: "穷二代解析" },
    { name: "囧妈", url: "https://z1.m1907.cn/?jx=", title: "囧妈" },
    { name: "爱奇艺优酷", url: "https://jiexi.071811.cc/jx2.php?url=", title: "爱奇艺 优酷(第一源)" },
    { name: "OK解析", url: "https://okjx.cc/?url=", title: "B站(第一源)" },
    { name: "黑云解析", url: "https://jiexi.380k.com/?url=", title: "B站(第二源)" },
    { name: "BL解析", url: "https://vip.bljiex.com/?v=", title: "全站" },
    { name: "HK解析", url: "https://jx.rdhk.net/?v=", title: "芒果" },
    { name: "初心解析", url: "http://jx.bwcxy.com/?v=", title: "初心解析" },
    { name: "星空解析", url: "https://jx.fo97.cn/?url=", title: "星空解析" },
    { name: "全网vip", url: "https://play.fo97.cn/?url=", title: "全网vip" },
    { name: "360dy解析", url: "http://yun.360dy.wang/jx.php?url=", title: "360dy解析" },
    { name: "小蒋极致", url: "https://www.kpezp.cn/jlexi.php?url=", title: "小蒋极致" },
    { name: "维多解析", url: "https://jx.ivito.cn/?url=", title: "维多解析（超清）" },
    { name: "云梦2", url: "http://app.hoptc.cn/dyjx.php?url=", title: "云梦2" },
    { name: "tv920解析", url: "https://api.tv920.com/vip/?url=", title: "tv920解析" },
    { name: "89免费解析", url: "http://www.ka61b.cn/jx.php?url=", title: "89免费解析" },
    // { name: "下视", url: "http://www.xiashipin.net/?url=", title: "下视?" },
    // { name: "智库解析", url: "http://www.guandianzhiku.com/v/s/?url=", title: "智库解析" },
    { name: "逆天解析", url: "http://nitian9.com/?url=", title: "逆天解析" },
    // { name: "羊分", url: "http://buchi.me/?v=", title: "羊分?" },
    // { name: "爱分", url: "http://api.iifen.top/?v=", title: "爱分?" },
    { name: "XyPlayer解析", url: "http://jx.xyplay.vip/?url=", title: "XyPlayer解析" },
    // { name: "豪华", url: "http://api.lhh.la/vip/?url=", title: "豪华?" },
    { name: "40解析", url: "https://jx40.net/url=", title: "40解析" },
    // { name: "无名影视", url: "http://api.51ds.shop/jx/?url=", title: "无名影视" },
    // { name: "宿命解析", url: "http://api.sumingys.com/index.php?url=", title: "宿命解析" },
    // { name: "ZLVIP", url: "https://vip.zlkkk.shop/2019/?url=", title: "ZLVIP" },
    { name: "8B解析", url: "http://api.8bjx.cn/?url=", title: "8B解析" },
    // { name: "千忆解析", url: "https://v.qianyicp.com/v.php?url=", title: "千忆解析" },
    // { name: "梦城", url: "https://mcncn.cn/?url=", title: "梦城" },
    { name: "41解析", url: "https://jx.f41.cc/?url=", title: "114解析" },
    { name: "ckmov解析", url: "https://www.ckmov.vip/api.php?url=", title: "解析系统" },
    { name: "超清干货", url: "http://k8aa.com/jx/index.php?url=", title: "超清干货" },
    // { name: "七星解析1", url: "http://api.greatchina56.com/?url=", title: "七星解析1" },
    // { name: "熊猫解析", url: "http://111ys.cn/111/?url=", title: "熊猫解析" },
    { name: "穷二", url: "http://jx.ejiafarm.com/x/jiexi.php?url=", title: "穷二" },
    { name: "517解析", url: "http://cn.bjbanshan.cn/jx.php?url=", title: "517解析" },
    // { name: "千亿", url: "https://v.qianyicp.com/v.php?url=", title: "千亿" },
    // { name: "小视", url: "http://www.xiashipin.net/?url=", title: "小视?" },
    // { name: "52解析", url: "http://apk.528kan.cn/index.php?url=", title: "52解析" },
    { name: "丸酷云解析", url: "https://wq66.cn/?url=", title: "丸酷解析" },
    { name: "智能解析", url: "https://jx.qppyy.com/jx/?url=", title: "智能解析" },
    { name: "618", url: "http://jx.618ge.com/?url=", title: "618?" },
    { name: "凉城解析", url: "http://jx.mw0.cc/?url=", title: "凉城解析" },
    { name: "解析", url: "http://69p.top/?url=", title: "解析" },
    { name: "播大", url: "https://vip.bddjx.com/?url=", title: "播大" },
    { name: "爸比解析", url: "http://www.33tn.cn/?url=", title: "爸比解析" },
    { name: "大亨解析", url: "http://jx.cesms.cn/?url=", title: "大亨解析" },
    { name: "赵先", url: "https://jx.zhaodh.top/?v=", title: "赵先" },
    { name: "宏伟解析", url: "http://www.cqhwdnwx.com/jx/?url=", title: "宏伟解析" },
    { name: "地久天长", url: "http://www.lexiangsj.xyz/?v=", title: "地久天长" },
    { name: "47解析", url: "http://jx.nxnns47.cf/?v=", title: "47解析" },
    { name: "1ff1解析", url: "http://jx.1ff1.cn/?url=", title: "1ff1解析" },
    { name: "116kan", url: "http://vip.116kan.com/?url=", title: "116kan" },
    { name: "弦易", url: "http://jx.hongyishuzhai.com/index.php?url=", title: "弦易" },
    { name: "55解析", url: "http://55jx.top/?url=", title: "55解析" },
    { name: "00180", url: " https://jx.000180.top/jx/?url=", title: "00180" },
    { name: "七星", url: "http://qx.c7776.com/v3/?v=", title: "七星" },
    { name: "128解析", url: "https://jx.128sp.com/jxjx/?url=", title: "128解析" },
    { name: "19解析", url: "http://19g.top/?url=", title: "19解析" },
    { name: "无极", url: "http://jx.6666txt.com/?url=", title: "无极" },
    { name: "云易1", url: "http://app.baiyug.cn:2019/vip/?url=", title: "云易1" },
    { name: "云易2", url: "https://vip.bddjx.com/?url=", title: "云易2" },
    { name: "秒播解析", url: "http://www.cuan.la/?url=", title: "秒播解析" },
    { name: "265解析", url: "https://vod.265ks.com/vod/index.php?url=", title: "265解析" },
    { name: "1969解析", url: "http://ys.1969com.cn/?url=", title: "1969解析" },
    { name: "优奇高速稳", url: "https://jx.youqi.tw/v.php?url=", title: "优奇高速稳" },
    // { name: "云解", url: "https://api.3456yun.com/?url=", title: "云解" },
    { name: "热点解析", url: "http://jx.rdhk.net/?v=", title: "热点解析" },
    { name: "ha12解析", url: "http://py.ha12.xyz/sos/index.php?url=", title: "ha12解析" },
    { name: "9酷解析", url: "https://jx.9ku.wang/9ku/?url=", title: "9酷解" },
    { name: "冰河解析", url: "http://jx.duzhiqiang.com/?url=", title: "冰河解析" },
    { name: "智能解析", url: "https://lany.lzure.kim/?v=", title: "智能解析" },
    { name: "狸猫解析", url: "http://111jx.xyz/?url=", title: "狸猫解析" },
    { name: "云解析", url: "http://gege.ha123.club/gege1234/index.php?url=", title: "云解?" },
    { name: "清风明月", url: "http://fateg.xyz/?url=", title: "清风明月" },
    { name: "花语有你", url: "http://api.huahuay.com/?url=", title: " 花语有你" },
    { name: "无名小站", url: "http://www.85105052.com/admin.php?url=", title: "综合线路" },
    // { name: "综合线路", url: "https://yun.odflv.com/?url=", title: "综合线路?(不太稳定)" },
    { name: "综合线路", url: "http://jx.598110.com/duo/index.php?url=", title: "综合线路" },
    { name: "综合线路", url: "http://jx.598110.com/index.php?url=", title: "综合线路" },
    { name: "优酷 稳定", url: "http://le.206dy.com/vip.php?url=", title: "优酷 稳定" },
    { name: "腾讯爱奇艺优酷", url: "http://api.hlglwl.com/jx.php?url=", title: "腾讯爱奇优酷" },
    { name: "通用vip接口3", url: "http://www.1717yun.com/jx/ty.php?url=", title: "通用vip接口3" },
    { name: "玩的嗨接口:42", url: "https://jx.128sp.com/jxjx/?url=", title: "玩的嗨接口:42" },
    // 未测试接口
    { name: "17云", url: "https://www.1717yun.com/jx/ty.php?url=", title: "优酷、腾讯超清、速度较快" },
    { name: "解析啦", url: "https://api.jiexi.la/?url=", title: "挺好的" },
    { name: "花园影视", url: "http://j.zz22x.com/jx/?url=", title: "挺好的" },
    { name: "乐乐云", url: "https://660e.com/?url=", title: "乐乐云" },
    { name: "YunParse", url: "http://api.jx.bugxx.com/cfee/vod.php?url=", title: "偶尔支持腾讯" },
    { name: "drgxj", url: "http://jx.drgxj.com/?url=", title: "1111" },
    { name: "初心", url: "https://jx.bwcxy.com/?v=", title: "优酷" },
    { name: "tt-hk", url: "https://hh.tt-hk.cn/jx.php?url=", title: "支持腾讯" },
    { name: "Duplay解析", url: "http://jx.du2.cc/?url=", title: "速度较慢" },
    { name: "无名小站", url: "https://www.administratorw.com/admin.php?url=", title: "速度较慢" },
    { name: "jlsprh解析", url: "http://vip.jlsprh.com/?url=", title: "还行吧" },
    { name: "初颜解析", url: "http://jx.wodym.cn/?url=", title: "初颜解析" },
    { name: "知网解析", url: "http://www.xyyh.xyz/zwjx/?url=", title: "知网解析" },
    { name: "云梦解析", url: "http://www.xuanbo.top/yjx/index.php?url=", title: "云梦解析" },
    { name: "z8解析", url: "http://www.hoptc.cn/z8/?url=", title: "z8解析" },
    { name: "116kan", url: "http://vip.116kan.com/?url=", title: "116kan" },
    { name: "弦易阁", url: "http://jx.hongyishuzhai.com/index.php?url=", title: "弦易阁" },
    { name: "55解析", url: "http://55jx.top/?url=", title: "55解析" },
    { name: "00180", url: " https://jx.000180.top/jx/?url=", title: "00180" },
    { name: "七星", url: "http://qx.c7776.com/v3/?v=", title: "七星" },
    { name: "128解析", url: "https://jx.128sp.com/jxjx/?url=", title: "128解析" },
    { name: "19解析", url: "http://19g.top/?url=", title: "19解析" },
    { name: "云易1", url: "http://app.baiyug.cn:2019/vip/?url=", title: "云易1" },
    { name: "云易2", url: "https://vip.bddjx.com/?url=", title: "云易2" },
    { name: "秒播解析", url: "http://www.cuan.la/?url=", title: "秒播解析" },
    { name: "265解析", url: "https://vod.265ks.com/vod/index.php?url=", title: "265解析" },
    { name: "优奇高速稳定", url: "http://ys.1969com.cn/?url=", title: "1969解析" },
    { name: "1969解析", url: "https://jx.youqi.tw/v.php?url=", title: "优奇高速稳定" },
    { name: "云解析", url: "https://api.3456yun.com/?url=", title: "云解析" },
    { name: "热点解析", url: "http://jx.rdhk.net/?v=", title: "热点解析" },
    { name: "ha12解析", url: "http://py.ha12.xyz/sos/index.php?url=", title: "ha12解析" },
    { name: "9酷解析", url: "https://jx.9ku.wang/9ku/?url=", title: "9酷解析" },
    { name: "冰河解析", url: "http://jx.duzhiqiang.com/?url=", title: "冰河解析" },
    { name: "智能解析", url: "https://lany.lzure.kim/?v=", title: "智能解析" },
    { name: "狸猫解析", url: "http://111jx.xyz/?url=", title: "狸猫解析" },
    { name: "综合线路", url: "https://yun.odflv.com/?url=", title: "综合线路(不太稳定)" },
    { name: "全网二", url: "http://jx.zzit.cc/tv.php?url=", title: "全网二 稳定性未知" },
    { name: "腾讯", url: "http://jx.598110.com/index.php?url=", title: "腾讯 别的不能用时用" },
    { name: "优酷稳定", url: "http://le.206dy.com/vip.php?url=", title: "优酷 稳定" },
    { name: "腾讯爱奇艺优酷", url: "http://api.hlglwl.com/jx.php?url=", title: "腾讯 ☆ 爱奇艺 √ 优酷" },
    { name: "通用vip接口3", url: "http://www.1717yun.com/jx/ty.php?url=", title: "通用vip接口3" },
    { name: "47解析", url: "http://jx.nxnns47.cf/?v=", title: "47解析" },
    { name: "1ff1解析", url: "http://jx.1ff1.cn/?url=", title: "1ff1解析" },
    { name: "云解析", url: "http://gege.ha123.club/gege1234/index.php?url=", title: "云解析" },
    { name: "清风明月", url: "http://fateg.xyz/?url=", title: "清风明月" },
    { name: "花语有你", url: "http://api.huahuay.com/?url=", title: "花语有你" },
    { name: "综合线路", url: "http://www.85105052.com/admin.php?url=", title: "综合线路" },
];