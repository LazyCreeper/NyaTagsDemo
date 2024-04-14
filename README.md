# NyaTagsDemo

基于 [DeepDanbooru](https://github.com/KichangKim/DeepDanbooru) 的一个 HTTP API。

## 前置条件
- 在 Linux 环境下安装了 DeepDanbooru 并能正常使用

## 使用方法

1. 安装 DeepDanbooru
```bash
# 克隆仓库到本地
git clone https://github.com/KichangKim/DeepDanbooru

# 进入目录
cd DeepDanbooru

# 安装项目依赖
pip install -r requirements.txt

# 安装
python3 setup.py install
```

2. 从[`DeepDanbooru/releases`](https://github.com/KichangKim/DeepDanbooru/releases)处下载模型并解压到一个你喜欢的地方

3. 编辑`/router/img.js`第26行的模型路径

4. 启动本项目
```bash
# 安装依赖
npm i

# 启动
node app.js
```

5. 然后 POST 请求地址`http://{ip}:1245/img/upload`，例如：
```bash
curl --request POST \
  --url http://localhost:1245/img/upload \
  --header 'content-type: multipart/form-data' \
  --form 'img=@E:\Lazy\Pictures\test.jpg'
```