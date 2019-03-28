---
path: "/blog/runImageMagickInMacOS"
date: "2017-03-16"
title: "在macOS上运行ImageMagick"
tags: ["macOS","ImageMagick"]
---

# 在macOS上运行ImageMagick
前言：
本教程讲的是用homebrew安装ImageMagick，用Nodejs调用ImageMagick。

1.在MAC上安装homebrew
https://brew.sh/index_zh-cn.html

2.用homebrew安装ImageMagick
```
brew install ImageMagick
```
安装完成后可以在终端里输入convert，如果跳出来一堆说明，则安装成功

3.使用nodejs来调用
这里我演示三种调用的方式：

 - 命令行
 http://www.imagemagick.org/script/command-line-tools.php
 在终端里的写法
 此处的67x57表示宽度67像素，高度57像素。
 还可以用%的写法，如67%x57%。
```
convert -resize 67x57 input_pic_path output_pic_path
```
我这里使用nodejs创建子进程来执行我们的命令
```
var exec = require('child_process').exec; 
var cmdStr = 'convert -resize 67x57 input_pic_path output_pic_path';
exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('error: '+stderr);
    } else {
        console.log('success: '+stdout);
    }
});
```


 - im模块
https://www.npmjs.com/package/imagemagick
 im模块是Imagemagick官方的调用模块，但是已经很久没有更新过了，而且以后也不会更新

```
var im = require('imagemagick');
im.convert(['input_pic_path', '-resize', '25x120', 'output_pic_path'], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});
```

 - gm
 https://www.npmjs.com/package/gm
 它支持GraphicsMagick和ImageMagick，并且还在持续更新中，**我建议使用这种方法，因为可以报bug。**
 

```
var gm = require('gm').subClass({
  imageMagick: true
});
gm('input/Desert.jpg')
.resize(240, 240)
.noProfile()
.write('output/Desert.jpg', function (err) {
  if (!err) console.log('done');
});
```

