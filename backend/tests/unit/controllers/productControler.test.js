const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../src/controllers/product.controller');
const productsServices = require('../../../src/services/product.service');
const products = require('../../../src/models/product.model');

describe('testando controllers de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testando função getProducts', async function () {
    const res = {};
    const req = {
      body: {
        name: 'Martelo do Thor',
      },
    }; // Preencha de acordo com a necessidade do teste

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    const expectedResult = [{
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
    ];

    sinon.stub(productsServices, 'getProductService').resolves(expectedResult);
    await productsController.getProducts(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('testando função getProductsById - produto encontrado', async function () {
    const res = {
      params: {
        id: 1,
        name: 'Martelo de Thor',
      },
    };
    const req = {
      params: {
        id: 1,
        name: 'Martelo de Thor',
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);

    const expectedResult = {
      params: {
        id: 1,
        name: 'Martelo de Thor',
      },
    };

    sinon.stub(productsServices, 'getProductIdService').resolves([expectedResult]);
    const result = await productsController.getProducId(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(result).to.be.deep.equal(expectedResult);
  });

  it('testando função getProductsById - produto não encontrado', async function () {
    const res = {};
    const req = {
      params: {
        id: 100,
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getProductIdService').resolves([]);
    await productsController.getProducId(req, res);

    expect(res.status.calledWith(404)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
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

    sinon.stub(productsServices, 'deleteProductService').resolves(null);
    await productsController.deleteProduct(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
  });
  it('testando função updateProductController com sucesso', async function () {
    const res = {};
    const req = {
      params: {
        id: 100,
      },
      body: {
        name: 'Novo Nome',
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'updateProductService').resolves({ id: 100, name: 'Novo Nome' });
    sinon.stub(products, 'getProductById').resolves({ id: 100, name: 'Novo Nome' });

    await productsController.updateProductController(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ id: 100, name: 'Novo Nome' })).to.be.equal(true);
  });
});