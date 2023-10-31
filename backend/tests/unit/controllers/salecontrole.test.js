const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Controller Testes', function () {
  afterEach(function () {
    sinon.restore();
  });

  const createMockRequestAndResponse = () => {
    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    return { req, res };
  };

  it('pega todas as venda', async function () {
    sinon.stub(salesService, 'getSalesServices').resolves();

    const { req, res } = createMockRequestAndResponse();
    await salesController.getSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('pega uma venda pelo ID', async function () {
    sinon.stub(salesService, 'getSalesIdServices').resolves();

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 1;

    await salesController.getSaleId(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('retorna o status 404 com ID inexistente', async function () {
    sinon.stub(salesService, 'getSalesIdServices').resolves();

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 9999;

    await salesController.getSaleId(req, res);

    expect(res.status).to.have.been.calledWith(404);
  });
  it('testando função delete', async function () {
    const res = {};
    const req = {
      params: {
        id: 100,
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'deleteServiceId').resolves(null);
    await salesController.deleteSale(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'Sale not found' })).to.be.equal(true);
  });
});