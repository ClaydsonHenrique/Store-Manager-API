const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Controller Tests:', function () {
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

  it('pega uma venda pelo ID ', async function () {
    sinon.stub(salesService, 'getSalesIdServices').resolves();

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 1;

    await salesController.getSaleId(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('retorna o status 404 com ID inexistente ', async function () {
    sinon.stub(salesService, 'getSalesIdServices').resolves();

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 9999;

    await salesController.getSaleId(req, res);

    expect(res.status).to.have.been.calledWith(404);
  });
});