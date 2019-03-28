---
path: "/blog/forbiddenCacheInIE"
date: "2018-01-22"
title: "在HTML中禁止IE缓存"
tags: ["IE","cache"]
---

大家在做前端页面开发的时候需要适配不同的浏览器，其中就属IE问题最多。可能你在chrome或firefox上调试好的页面效果一到IE上就完全动不起来了，debug很久也发现不了问题，最后才会想到问题可能是在缓存上。

接下来从修改难易程度来介绍三种对应IE缓存的方法：

1.在Head里添加禁止使用缓存的代码，但是架不住IE流氓不睬它呀

```
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-control" content="no-cache">
<meta http-equiv="Cache" content="no-cache">
<link rel="shortcut icon" href="/Static/images/icon02.png" />
```
2.使用不带缓存的ajax方法
我自己将jquery的ajax方法封装了，所以只要改一处地方就好了，默认使用不带cache的方式，但IE这个流氓还是无视了它。
```
$.ajax({
        ……
        cache: false,//不使用缓存
        ……
    })
```
3.将所有的ajax调用都改为post方法，这是我在试过多种方法，最后在别人的评论里发现的[好方法](https://stackoverflow.com/questions/4303829/how-to-prevent-a-jquery-ajax-request-from-caching-in-internet-explorer)。

基本上用了方法3后就能解决IE的缓存问题了。
