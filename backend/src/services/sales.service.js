const { getAllSales, getSalesById, postSalesModels } = require('../models/sales.model');
const { validateProductId } = require('../middlewares/validateProduct');

const getSalesServices = async () => {
  const resp = await getAllSales();
  return resp;
};

const getSalesIdServices = async (id) => {
  const resp = await getSalesById(id);
  return resp;
};
const addSale = async (saleData) => {
  const AllIDs = await validateProductId(saleData);
  console.log(AllIDs, 'fsdsfd');
  if (!AllIDs) {
    return false;
  }
  const resp = await postSalesModels(saleData);
  return resp;
};

module.exports = {
  getSalesIdServices,
  getSalesServices,
  addSale,
};