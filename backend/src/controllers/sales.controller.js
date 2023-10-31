const { getSalesServices, getSalesIdServices } = require('../services/sales.service');

const getSales = async (req, res) => {
  const resp = await getSalesServices();
  return res.status(200).json(resp);
};

const getSaleId = async (req, res) => {
  const { id } = req.params;
  const resp = await getSalesIdServices(id);
  if (resp && resp.length > 0) {
    return res.status(200).json(resp);
  }
  return res.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  getSales,
  getSaleId,
};