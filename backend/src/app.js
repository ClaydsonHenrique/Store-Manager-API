const express = require('express');

const app = express();
app.use(express.json());

// importando funções Produto
const { getProducts, getProducId,
  postProduct, updateProductController,
  deleteProduct } = require('./controllers/product.controller');

// importando funções Venda
const { getSales, getSaleId, salePost, deleteSale } = require('./controllers/sales.controller');

// importando validações Produto
const { validateProductName,
  validatePutProdutoIdAndName } = require('./middlewares/validateProduct');

// importando validações Venda
const { validateId,
  validateQuantity,
  validateQuantityType } = require('./middlewares/validateSales');

// funções requisito 01
app.get('/products', getProducts);
app.get('/products/:id', getProducId);

// funções requisito 02
app.get('/sales', getSales);
app.get('/sales/:id', getSaleId);

// funções requisito 03
//  requisito 04
app.post('/products', validateProductName, postProduct);
// funções requisito 05
// funções requisito 06
app.post(
  '/sales',
  validateId,
  validateQuantity,
  validateQuantityType,
  salePost,
);

// funções requisito 07
app.put('/products/:id', validateProductName, validatePutProdutoIdAndName, updateProductController);

// funções requisito 08
app.delete('/products/:id', deleteProduct);

// funções requisito 09
app.delete('/sales/:id', deleteSale);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
