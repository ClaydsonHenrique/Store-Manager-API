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

const postProduct = async (produto) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [resp] = await connection.execute(query, [produto.name]);
  const { insertId } = resp;
  const productPost = {
    id: insertId,
    name: produto.name,
  };
  return productPost;
};

module.exports = {
  getAllProducts,
  getAllProductById,
  postProduct,
};