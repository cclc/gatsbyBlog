---
path: "/blog/addGoogleAdsenseToGatsby"
date: "2019-03-29"
title: "在gatbsy上添加google adsense"
tags: ["google","adsense","gatbsy"]
---

google adsense 需要被放置在HTML的<head></head>标记之间

gatbsy是基于react的，所以我们要借助react-helmet将script放置在<head>标记之间

sample code:
```
import Helmet from 'react-helmet'
......

// code in render
<Helmet>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
    {`(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-xxxxxxxxx",enable_page_level_ads: true});`}
    </script>
</Helmet>
```