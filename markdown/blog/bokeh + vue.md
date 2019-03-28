---
path: "/blog/bokeh+vue"
date: "2018-12-27"
title: "bokeh + vue"
tags: ["bokeh","vue"]
---

# bokeh + vue
2019/3/6更新
修改了js和css的加载方式，具体代码的修改看github。
原本的思路其实无法解决bokeh的前端后台版本不同的问题。

2018/12/29更新
我封装了一个npm包
https://www.npmjs.com/package/bokeh-vue
对应的github地址
https://github.com/cclc/bokeh-vue

原文:
bokeh是python用来生成图表的库，类似于百度的echart，不过bokeh和后台代码结合的更紧密些，可以直接导出html文件。
在vue里显示bokeh的图表有两种办法:
**1.使用iframe加载bokeh导出的html文件**
缺点：
①因为不知道html内容的高度，事先定义高度的话会有滚动条，不美观
②同时加载多个iframe时会造成页面的卡死，我本地加载5个页面会卡大概10秒，因为无法知道iframe内的内容什么时候加载完成，所以我也没法做loading界面去掩饰页面卡死
优点：
①简单！
**2.把bokeh的div和script传给页面，在页面上进行渲染**
使用bokeh的components功能，将div和js从plotting里分离出来
python的相关代码如下：
```
script, div = components(p, wrap_script=False)
return {'div':div, 'script':script}
```
wrap_script=false 是将原本包在js代码外的< script >标签删除，我选择了删除，因为我在页面添加节点的时候会手动加入script标签

在vue的template里没法加入script标签，所以我需要通过在body下动态地添加script的方式来运行bokeh的js代码
vue的相关代码如下:
```
<!-- 通过v-html在template里加入bokeh的div -->
<div v-html="html">
</div>
```
```
// 在头部插入css代码
// 因为要保持前端和后台的bokeh版本一致，所以使用了拼接cdn路径的方式
let link = document.createElement('link')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', 'https://cdn.pydata.org/bokeh/release/bokeh-' + bokehVersion + '.min.css')
link.setAttribute('type', 'text/css')
document.head.appendChild(link)
// 在头部插入js代码
let script = document.createElement('script')
script.setAttribute('src', 'https://cdn.pydata.org/bokeh/release/bokeh-' + bokehVersion + '.min.js')
script.async = 'async'
document.head.appendChild(script)
// cdn的js加载完毕后再请求bokeh参数
script.onload = () => {
  _this.axios.get('/yourUrl').then((response) => {
    _this.html= response.data.div
    // 插入绘制script代码
    let bokehRunScript = document.createElement('SCRIPT')
    bokehRunScript.setAttribute('type', 'text/javascript')
    let t = document.createTextNode(response.data.script)
    bokehRunScript.appendChild(t)
    document.body.appendChild(bokehRunScript)
    // 绘制代码执行完后关闭等待画面
    _this.loading = false
  })
}
```
缺点：
①相比iframe方式要多写代码
优点：
①性能更好，每次只传输所需的内容，数据包小
②显示更好，没有上下滚动条了
③体验更好，可以加入Loading画面了

**踩坑点：**
①.npm上的vue-bokeh库是不能用的
它通过在template里添加script标签来运行bokeh的js代码，首先编译就通不过，不过它提供给我了components的思路
```
<template>
  {{{plot.div}}}
  <script>
    {{{plot.script}}}
  </script>
</template>

<script>
export default {
  props: {
    plot: Object
  },
  ready () {
    eval(this.plot.script)
  }
}
</script>
```
②注意前端和后台的bokeh版本，版本不同会有渲染问题
③我有试过用eval()的方式运行bokeh的js，可能因为作用域的问题无法正常运行
