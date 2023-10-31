const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [resp] = await connection.execute(query);
  return resp;
};

const getProductById = async (id) => {
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
const updateProductById = async (id, { name }) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [resp] = await connection.execute(query, [name, id]);
  console.log(resp);
  return resp;
};

const deleteProductById = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);

  if (result.affectedRows === 0) {
    return null;
  }

  return { id };
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProductById,
  deleteProductById,
};