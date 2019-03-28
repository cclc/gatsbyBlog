---
path: "/blog/nodejsMonitorPush"
date: "2018-07-16"
title: "nodejs监控微信公众号关注事件推送"
tags: ["WeChat","nodejs"]
---


1.首先要在微信公众号后台填写服务器信息。 具体可看微信的文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319

2.在服务器上配置具体代码反馈微信的验证，如第三步的
```
this.ctx.body = params.echostr;
```

3.和关注、取消关注相关的业务逻辑代码。这里我使用了xml2js将xml转成对象和js-sha1来生成sha1加密字符串
```
	const XMLJS = require('xml2js');
	const sha1 = require('js-sha1');
	// 解析URL里的参数
    const params = Url.parse(this.ctx.req.url, true).query;
    // 微信传来的加密字符串
    const signature = params.signature;
    // 根据传来的其他值计算加密字符串
    const timestamp = params.timestamp;
    const nonce = params.nonce;
    const token = 'weixin'; // 这是在公众平台上自己设置的
    const array = [ token, timestamp, nonce ];
    array.sort();
    const scyptoString = sha1(array.join(''));

    // 比对两个加密字符串是否相等，相等则为微信官方传来的信息
    if (scyptoString === signature) {
      // 获取请求内的xml参数
      this.ctx.req.on('data', data => {
        // 将xml解析
        XMLJS.parseString(data.toString(), (err, result) => {
          if (result) {
            const event = result.xml.Event[0];
            if (event === 'subscribe') {
              // 订阅，获取用户基本信息存入订阅表，建议使用非同步写法以加快response
              this.ctx.service.wechat.saveSubscibeUser(result.xml.FromUserName[0]);
            } else if (event === 'unsubscribe') {
              // 取消订阅
              this.ctx.service.wechat.deleteSubscibeUser(result.xml.FromUserName[0]);
            }
          }
        });
      });
    }
    // 假如服务器无法保证在五秒内处理并回复，可以直接回复空串，微信服务器不会对此作任何处理，并且不会发起重试
    if (params.echostr) {
	  // 用于通过微信验证
      this.ctx.body = params.echostr;
    } else {
      this.ctx.body = '';
    }
```

微信的其他事件推送：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140454
