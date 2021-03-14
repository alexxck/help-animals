const express = require('express')
const app = express();

const SaveBinaryFileRouter = require('./routers/save-binary-file');

const port = 8000;

app.use('/', SaveBinaryFileRouter);

app.get('', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
