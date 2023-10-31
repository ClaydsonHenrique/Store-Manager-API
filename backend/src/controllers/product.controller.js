const { getProductService, getAllProductByIdService,
  postProductService } = require('../services/product.service');

const getProductController = async () => {
  const resp = await getProductService();
  return resp;
};

const getProductById = async (id) => {
  const resp = await getAllProductByIdService(id);
  return resp;
};
const postProduct = async (req, res) => {
  const resp = await postProductService(req.body);
  return res.status(201).json(resp);
};

module.exports = {
  getProductController,
  getProductById,
  postProduct,
};