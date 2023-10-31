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

const postSalesModels = async (saleData) => {
  const querySales = 'INSERT INTO StoreManager.sales (date) VALUES (current_timestamp());';
  const [resp] = await connection.execute(querySales);
  const { insertId } = resp;
  await Promise.all(saleData.map(async (saleIndex) => {
    const { productId, quantity } = saleIndex;
    const queryInsert = `
      INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES
      (?,?,?);`;
    await connection.execute(queryInsert, [insertId, productId, quantity]);
    return saleIndex;
  }));
  const saleObject = {
    id: insertId,
    itemsSold: saleData,
  };
  return saleObject;
};

module.exports = {
  getAllSales,
  getSalesById,
  postSalesModels,
};