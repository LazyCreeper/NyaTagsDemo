# NyaTagsDemo

基于 [DeepDanbooru](https://github.com/KichangKim/DeepDanbooru) 的一个 HTTP API。

## 前置条件
- 在 Linux 环境下安装了 DeepDanbooru 并能正常使用

## 使用方法

```bash
# 1.编辑 /router/img.js 第26行的模型路径

# 2.安装依赖
npm i

# 3.启动
node app.js
```

然后 POST 请求地址`http://{ip}:1245/img/upload`，例如：
```bash
curl --request POST \
  --url http://localhost:1245/img/upload \
  --header 'content-type: multipart/form-data' \
  --form 'img=@E:\Lazy\Pictures\test.jpg'
```