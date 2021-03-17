const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_Secret = 'JWT_secret_key';
const testUser = {email: 'testuser@gmail.com', password: '1234'};

router.post('', (req, res) => {
  if (req.body) {
    const user = req.body;
    console.log(user)

    if (testUser.email === req.body.email && testUser.password === req.body.password) {
      const token = jwt.sign(user, JWT_Secret);
      res.status(200).send({
        signed_user: user,
        token: token
      });
    } else {
      res.status(403).send({
        errorMessage: 'Authorisation required!'
      });
    }
  } else {
    res.status(403).send({
      errorMessage: 'Please provide email and password'
    });
  }

});

module.exports = router;
