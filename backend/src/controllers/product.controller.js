const {
  getProductService,
  getProductIdService,
  postProductService,
  updateProductService, deleteProductService,
} = require('../services/product.service');

const getProducts = async (_req, res) => {
  const resp = await getProductService();
  return res.status(200).json(resp);
};

const getProducId = async (req, res) => {
  const { id } = req.params;
  const resp = await getProductIdService(id);
  if (resp.length) {
    return res.status(200).json(resp[0]);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const postProduct = async (req, res) => {
  const resp = await postProductService(req.body);
  return res.status(201).json(resp);
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await updateProductService(id, { name });
  return res.status(200).json({ id: Number(id), name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await deleteProductService(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).end();
};

module.exports = {
  getProducts,
  getProducId,
  postProduct,
  updateProductController,
  deleteProduct,
};