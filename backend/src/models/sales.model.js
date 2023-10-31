const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT sales.date,
    sales_products.sale_id AS saleId,
    sales_products.product_id AS productId,
    sales_products.quantity 
    FROM  StoreManager.sales
    JOIN StoreManager.sales_products 
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id`;
  const [resp] = await connection.execute(query);
  return resp;
};

const getSalesById = async (id) => {
  const query = `SELECT sales.date,
    sales_products.product_id AS productId,
    sales_products.quantity 
    FROM  StoreManager.sales
    JOIN StoreManager.sales_products 
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = ?`;
  const [resp] = await connection.execute(query, [id]);
  return resp;
};

module.exports = {
  getAllSales,
  getSalesById,
};