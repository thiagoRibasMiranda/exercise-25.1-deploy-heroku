const express = require('express');

const app = express();

app.get('/', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Está vivo!!!');
}