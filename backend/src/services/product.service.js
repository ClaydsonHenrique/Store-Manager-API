const { getAllProducts, getAllProductById, postProduct } = require('../models/product.model');

const getProductService = async () => {
  const resp = await getAllProducts();
  return resp;
};

const getAllProductByIdService = async (id) => {
  const resp = await getAllProductById(id);
  return resp;
};

const postProductService = async (produto) => {
  const resp = await postProduct(produto);
  return resp;
};

module.exports = {
  getProductService,
  getAllProductByIdService,
  postProductService,
};