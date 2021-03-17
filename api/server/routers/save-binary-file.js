const express = require('express')
const router = express.Router();

const saveArrayBufferToBinaryFile = require('../services/save-request-array-buffer-to-binary-file')

router.post('', (req, res) => {

  saveArrayBufferToBinaryFile(req, __dirname + '/test_data.jpg', () => {
    res.send('complete');
  })
})


module.exports = router;
