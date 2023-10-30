const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [resp] = await connection.execute(query);
  return resp;
};

const getAllProductById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [resp] = await connection.execute(query, [id]);
  return resp;
};

module.exports = {
  getAllProducts,
  getAllProductById,
};