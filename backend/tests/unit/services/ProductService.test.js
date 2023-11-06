const { expect } = require('chai');
const sinon = require('sinon');
const { getProductService, getProductIdService } = require('../../../src/services/product.service');
const products = require('../../../src/models/product.model');

describe('getProductService', function () {
  after(function () {
    sinon.restore();
  });
  it('testando funcao getProductService', async function () {
    const expectedResult = [
      {
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
    sinon.stub(products, 'getAllProducts').resolves([expectedResult]);
    const result = await getProductService();
    expect(result).to.be.deep.equal(expectedResult);
  });
  it('testando funcao getProductIdService', async function () {
    const expectedResult = [
      {
        id: 1,
        name: 'Martelo de Thor',
      },
    ];
    sinon.stub(products, 'getProductById').resolves([expectedResult]);
    const result = await getProductIdService(1);
    expect(result).to.be.deep.equal(expectedResult);
  });
});