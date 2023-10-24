const connection = require('./connectin');

const getAllProducts = async () => {
  const query = 'SELCT * FROM StoreManager.products';
  const [resp] = await connection.execute(query);
  return resp;
};

const getAllProductById = async (id) => {
  const query = 'SELCT * FROM StoreManager.products WHERE id = ?';
  const [resp] = await connection.execute(query, [id]);
  return resp;
};

module.exports = {
  getAllProducts,
  getAllProductById,
};