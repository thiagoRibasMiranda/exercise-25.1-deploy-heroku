const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', handleHelloWorldRequest);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Está vivo!!!');
}