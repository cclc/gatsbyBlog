---
path: "/blog/set0000-00-00InMysql"
date: "2016-11-14"
title: "MySql中时间类型无法设置默认0000-00-00的解决方法"
tags: ["mysql"]
---

最近更新了mysql 5.7.x后发现原本的date类型和datetime类型等无法设置为DEFAULT '0000-00-00'了。  

原因是5.7 默认开始用以下sql mode :
```
ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER, and NO_ENGINE_SUBSTITUTION
```

其中NO_ZERO_IN_DATE, NO_ZERO_DATE两个选项禁止了0000这样的日期和时间。因此在mysql的配置文件中，重新设置sql-mode，去掉这两项就可以了。如：   

```
sql-mode="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
```

mac端的mysql解决方法是：

在MacOS中默认是没有my.cnf 文件，如果需要对MySql 进行定制，拷贝/usr/local/mysql/support-files/目录中任意一个.cnf 文件。笔者拷贝的是my-default.cnf，将它放到其他目录，按照上面修改完毕之后，更名为my.cnf，然后拷贝到/etc目录再重启下mysql就大功告成了。  

win端的对应文件是mysql.ini，一般会在安装目录的根目录

参考链接：
```
http://www.07net01.com/2016/04/1479450.html

http://www.shangxueba.com/jingyan/1609295.html
```