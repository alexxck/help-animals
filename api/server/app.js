const express = require('express')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const port = 8000;
// DECLARE JWT-secret
const JWT_Secret = 'JWT_secret_key';

const testUser = {email: 'kelvin@gmai.com', password: '1234'};

const app = express();

app.use(bodyParser.json());

const SaveBinaryFileRouter = require('./routers/save-binary-file');

app.post('/api/authenticate', (req, res) => {
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

app.use('/', SaveBinaryFileRouter);

app.get('', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
