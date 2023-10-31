const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../../../src/app');
const { getAllSales, getSalesById } = require('../../../src/models/sales.model');
const { getSalesServices, getSalesIdServices } = require('../../../src/services/sales.service');

const { expect } = chai;
chai.use(chaiHTTP);

describe('Sales', function () {
  describe('GET /sales', function () {
    it('Deve retornar uma lista de vendas', function (done) {
      chai
        .request(app)
        .get('/sales')
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('GET /sales/:id', function () {
    it('Deve retornar 404 se a venda não for encontrada', function (done) {
      chai
        .request(app)
        .get('/sales/999')
        .end((_err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  describe('Sales model', function () {
    it('getAllSales retorna array de vendas', async function () {
      const sales = await getAllSales();
      expect(sales).to.be.an('array');
    });
    it('getSalesById retonar array de venda pelo id', async function () {
      const id = 1;
      const sales = await getSalesById(id);
      expect(sales).to.be.an('array');
    });
  });

  describe('Sales service', function () {
    it('getSalesServices retorna array de vendas', async function () {
      const sales = await getSalesServices();
      expect(sales).to.be.an('array');
    });

    it('getSalesIdServices retonar array de venda pelo id', async function () {
      const id = 1;
      const sales = await getSalesIdServices(id);
      expect(sales).to.be.an('array');
    });
  });
});