const express = require('express');
const imgRouter = require('./router/img.js')
const app = express()

app.use('/img', imgRouter)

const port = 1245
app.listen(port, () => console.log("已启动：http://localhost:" + port))