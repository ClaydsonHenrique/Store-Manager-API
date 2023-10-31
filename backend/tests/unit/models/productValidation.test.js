const { expect } = require('chai');
const sinon = require('sinon');
const { validateProductName } = require('../../../src/middlewares/validateProduct');

describe('testando middewares de products', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('testando validateName', async function () {
    const res = {};
    const req = {
      body: {

      },
    };
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    await validateProductName(req, res, next);
    expect(res.status.calledWith(400)).to.be.equal(true);
  });

  it('testando tamanho de nome', async function () {
    const res = {};
    const req = {
      body: {
        name: 'L',
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    await validateProductName(req, res);
    expect(res.status.calledWith(422)).to.be.equal(true);
  });
});
