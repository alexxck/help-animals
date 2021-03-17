const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const SaveBinaryFileRouter = require('./routers/save-binary-file');
const Authenticate = require('./routers/authenticate');

app.use('/save-array-buffer-to-binary-file', SaveBinaryFileRouter);
app.use('/authenticate', Authenticate);

app.get('', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
