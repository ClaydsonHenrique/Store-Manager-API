const { getAllProducts, getAllProductById } = require('../models/product.model');

const getProductService = async () => {
  const resp = await getAllProducts();
  return resp;
};

const getAllProductByIdService = async (id) => {
  const resp = await getAllProductById(id);
  return resp;
};

module.exports = {
  getProductService,
  getAllProductByIdService,
};