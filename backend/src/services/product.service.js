const { getAllProducts, getProductById,
  postProduct, updateProductById, deleteProductById,
} = require('../models/product.model');

const getProductService = async () => {
  const resp = await getAllProducts();
  return resp;
};

const getProductIdService = async (id) => {
  const resp = await getProductById(id);
  return resp;
};

const postProductService = async (produto) => {
  const resp = await postProduct(produto);
  return resp;
};

const updateProductService = async (id, { name }) => {
  const resp = await updateProductById(id, { name });
  return resp;
};

const deleteProductService = async (produto) => {
  const resp = await deleteProductById(produto);
  return resp;
};

module.exports = {
  getProductService,
  getProductIdService,
  postProductService,
  updateProductService,
  deleteProductService,
};
