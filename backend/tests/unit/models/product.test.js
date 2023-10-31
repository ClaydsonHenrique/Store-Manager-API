const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { getAllProducts, getProductById, postProduct, updateProductById } = require('../../../src/models/product.model');

describe('testando a camada model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testando o model de buscar produtos', async function () {
    const expectedResult = [
      {
        id: 1,
        name: 'Martelo de Thor',
      },
    ];
    sinon.stub(connection, 'execute').resolves([expectedResult]);
    const result = await getAllProducts();
    expect(result).to.be.deep.equal(expectedResult);
  });

  it('testando model de produtos por id', async function () {
    const expectedResult = [
      {
        id: 1,
        name: 'Martelo de Thor',
      },
    ];
    sinon.stub(connection, 'execute').resolves([expectedResult]);
    const result = await getProductById(1);
    expect(result).to.be.deep.equal(expectedResult);
  });
  it('testando model de atualização de produto por id', async function () {
    const id = 1;
    const newName = 'Novo Nome';
    const expectedResponse = {
      affectedRows: 1,
    };

    sinon.stub(connection, 'execute').resolves([expectedResponse]);

    const result = await updateProductById(id, { name: newName });

    expect(result).to.be.deep.equal(expectedResponse);
  });
  it('testando model de cadastrar produtos', async function () {
    const newProduct = {
      name: 'ProdutoX',
    };
    const expectResponse = { insertId: 10 };
    sinon.stub(connection, 'execute').resolves([expectResponse]);
    const result = await postProduct(newProduct);
    const expectNewObject = {
      id: expectResponse.insertId,
      name: newProduct.name,
    };
    expect(result).to.be.deep.equal(expectNewObject);
  });
});