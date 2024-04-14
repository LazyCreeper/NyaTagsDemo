const router = require('express')()
const multer = require('multer');
const path = require('path')
const pathStr = path.join(process.cwd(), '/files')
const { exec } = require('child_process');
const fs = require('fs');

// 设置存储配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pathStr) // 确保这个文件夹已经存在
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage });

router.post("/upload", upload.single('img'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  exec(`deepdanbooru evaluate ${pathStr} --project-path /root/model_v3 --allow-folder`, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行的错误: ${error}`);
    }
    if (stderr) {
      console.error(`shell错误: ${stderr}`);
    }
    console.log(`${pathStr}/${file.originalname}`)
    const regex = /\(\d+\.\d+\) (\w+)/g;

    let output = [];
    let match;
    while ((match = regex.exec(stdout)) !== null) {
      // 添加匹配的单词到列表.
      output.push(match[1]);
    }

    // 转换列表为逗号分隔的字符串.
    output = output.join(',');

    console.log(output);
    res.send({
      code: 200,
      data: {
        tags: output
      }
    });

    // 删掉上传的文件
    fs.unlinkSync(`${pathStr}/${file.originalname}`)
  });

});

module.exports = router