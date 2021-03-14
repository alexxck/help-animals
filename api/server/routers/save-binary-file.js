const fs = require('fs');
const express = require('express')
const router = express.Router();

const defaultFileName = __dirname + '/test_data.jpg';

// send code example
//
// FileReaderAsArrayBuffer.readAsArrayBuffer(elem.files[0]).subscribe(file => {
//
//   const data = file.result;
//   const url = 'http://localhost:8000/save-array-buffer-to-binary-file';
//   this.httpClient.post(url, data).subscribe((result) => {
//     console.log(result);
//   }, (err) => this.submitErrorHandler(err));
//
//
// }, error => {
//   alert('Невдалося завантажити файл: ' + error);
// });


router.post('/save-array-buffer-to-binary-file', (req, res) => {
  console.log('loading file')
  let accum = new Uint8Array(0);

  req.on('data', function (data) {
    accum = appendBuffer(accum, data);
  });

  req.on('end', function () {
    writeFile(accum, function () {
      res.send('complete');
      console.log('end');
    });
  });
})

const writeFile = (data, callBackFn) => {
  const writeData = Buffer.from(data);
  fs.writeFile(defaultFileName, writeData, function () {
    callBackFn()
  });
}

const appendBuffer = function (buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
};

module.exports = router;
