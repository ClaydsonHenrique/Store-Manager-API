const { getAllSales, getSalesById,
  postSalesModels, deleteSaleById } = require('../models/sales.model');
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
  const allIdsAreValids = await validateProductId(saleData);
  console.log(allIdsAreValids, 'fsdsfd');
  if (!allIdsAreValids) {
    return false;
  }
  const resp = await postSalesModels(saleData);
  return resp;
};

const deleteServiceId = async (id) => {
  const resp = await deleteSaleById(id);
  return resp;
};

module.exports = {
  getSalesIdServices,
  getSalesServices,
  addSale,
  deleteServiceId,
};
