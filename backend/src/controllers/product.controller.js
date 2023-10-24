const { getProductService, getAllProductByIdService } = require('../services/product.service');

const getProductController = async () => {
  const resp = await getProductService();
  return resp;
};

const getProductById = async (id) => {
  const resp = await getAllProductByIdService(id);
  return resp;
};

module.exports = {
  getProductController,
  getProductById,
};