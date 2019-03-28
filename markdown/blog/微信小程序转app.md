---
path: "/blog/miniProgram"
date: "2018-08-02"
title: "微信小程序转app"
tags: ["miniProgram","WeChat"]
---

文章基于mpvue开发的小程序

mpvue转html参考了https://github.com/Aimee1608/wxH5sudoku469

转出的html文件使用[Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/)打包成跨平台的app
具体流程可以参考Cordova的指南，下面列出几个可能遇到的问题
1.运行测试创建项目命令报错
```
cordova create hello com.example.hello HelloWorld
```
可以先手动新建文件夹，然后在文件夹下运行以下命令
```
npm install cordova-app-hello-world
```
会在文件夹内生成一个node_module文件夹，把该文件夹下的**template_src**文件夹里的内容拷贝出来就是测试项目的内容

2.mac环境下跑以下命令可能出现**Gradle**未安装
```
cordova requirements
```
使用该命令安装
```
brew install gradle
```

3.打包apk
跑打包命令时可能会出现android:minSdkVersion版本不符的问题
```
cordova build
```
手动修改项目根目录下的config.xml里的，把value改成期望版本即可
```
<preference name="android-minSdkVersion" value="16" />
```

PS：
可以使用[phoneGap](https://phonegap.com/getstarted/)在电脑和手机上的客户端立即浏览app的样式，方便开发


