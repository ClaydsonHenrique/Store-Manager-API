const { expect } = require('chai');
const sinon = require('sinon');
const salesValidation = require('../../../src/middlewares/validateSales');

describe('testando middewares de products', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('testando validateId', async function () {
    const res = {};
    const req = {
      body: [
        {
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    await salesValidation.validateId(req, res);
    expect(res.status.calledWith(400)).to.be.equal(true);
  });

  it('testando validateQuantity', async function () {
    const res = {};
    const req = {
      body: [
        {
          productId: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    await salesValidation.validateQuantity(req, res);
    expect(res.status.calledWith(400)).to.be.equal(true);
  });

  it('testando validateQuantityType', async function () {
    const res = {};
    const req = {
      body: [
        {
          productId: 1,
          quantity: '1',
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    await salesValidation.validateQuantityType(req, res);
    expect(res.status.calledWith(422)).to.be.equal(true);
  });
});