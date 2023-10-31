const { getProductService } = require('../services/product.service');
const { getProductById } = require('../models/product.model');

const validateProductName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const validateProductId = async (items) => {
  const productIds = items.map(({ productId }) => productId);
  const storedIds = await getProductService();

  return productIds.every((productId) =>
    storedIds.some(({ id }) => id === productId));
};

const validatePutProdutoIdAndName = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  const getProducts = await getProductById(id);
  if (!id || getProducts.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateProductName,
  validateProductId,
  validatePutProdutoIdAndName,
};