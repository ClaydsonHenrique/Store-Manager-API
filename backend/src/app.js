const express = require('express');

const app = express();
app.use(express.json());

const { getProductController, getProductById } = require('./controllers/product.controller');

app.get('/product', getProductController);
app.get('/product/:id', getProductById);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
