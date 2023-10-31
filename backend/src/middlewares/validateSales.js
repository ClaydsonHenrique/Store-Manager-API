const validateId = (req, res, next) => {
  const salesArray = req.body;

  for (let index = 0; index < salesArray.length; index += 1) {
    const { productId } = salesArray[index];
    if (!productId && productId !== 0) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const salesArray = req.body;

  for (let index = 0; index < salesArray.length; index += 1) {
    const { quantity } = salesArray[index];
    if (!quantity && quantity !== 0) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  }
  next();
};

const validateQuantityType = (req, res, next) => {
  const salesArray = req.body;
  for (let index = 0; index < salesArray.length; index += 1) {
    const { quantity } = salesArray[index];
    if (typeof quantity !== 'number' || quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }
  next();
};

module.exports = {
  validateId,
  validateQuantity,
  validateQuantityType,
};