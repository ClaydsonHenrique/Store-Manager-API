const { getAllSales, getSalesById } = require('../models/sales.model');

const getSalesServices = async () => {
  const resp = await getAllSales();
  return resp;
};

const getSalesIdServices = async (id) => {
  const resp = await getSalesById(id);
  return resp;
};

module.exports = {
  getSalesIdServices,
  getSalesServices,
};