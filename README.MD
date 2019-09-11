## 前端工具库

提供高质量的无依赖的前端基础工具

每个文件完成一件事,尽可能无依赖,考虑全面.

可直接使用es6,es7语法,无需对新语法层面做兼容

每个封装都要有说明和示例,写到代码注释里

只有 `src` 目录下的文件被发布到`npm`

## 工具列表



### 通用



- 数组辅助方法

- asyncQueue串行异步队列

- asyncTask异步任务队列

- base64

- 字节格式化

- 日期格式化

- 防抖函数

- 深拷贝

- 时间格式化

- 发布者订阅者

- 身份证号校验

- 类型与正则校验

- buildQuery与parseQuery

- 字符串辅助函数

- 节流函数

- 循环检查函数

  



### 仅针对浏览器

- closest
- cookie读写
- download blob
- 识别jpg图片里的旋转
- listenOnce
- loadImgAsync
- urlPath



### 仅针对NODE




tsc -t ES2017 -m es2015 asyncTask.ts

tsc -t ES2017 -m es2015 ws.ts

### 关于polyfill

使用此工具生成

https://polyfill.io/v3/url-builder/

例如

采用Windows10 上的 IE11 访问

```
curl -A "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" -o polyfill.js https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver&flags=always,gated
```

下载传入我们自己的CDN

不要自己在项目里写

polyfill 单独加载,所有项目共用,不与项目混淆