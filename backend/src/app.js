const express = require('express');

const app = express();
// app.use(express.json());

const { getProductController, getProductById,
  postProduct } = require('./controllers/product.controller');
const { getSales, getSaleId } = require('./controllers/sales.controller');

// funções requisito 01
app.get('/products', getProductController);
app.get('/products/:id', getProductById);

// funções requisito 02
app.get('/sales', getSales);
app.get('/sales/:id', getSaleId);

// funções requisito 03
app.post('/products', postProduct);
// funções requisito 04

// funções requisito 05

// funções requisito 06

// funções requisito 07

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
