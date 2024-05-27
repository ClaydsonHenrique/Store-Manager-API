Store Manager API

Este projeto é uma API de gerenciamento de loja desenvolvida com Node.js e Express. A API permite a gestão de produtos e vendas, incluindo operações de criação, leitura, atualização e exclusão (CRUD).
Índice

    Instalação
    Uso
    Estrutura do Projeto
    Endpoints
    Modelos de Dados
    Validações

Instalação

    Clone o repositório e instale as dependências:

    bash

git clone https://github.com/seu-usuario/store-manager-api.git
cd store-manager-api
npm install


Inicie o servidor:

bash

    npm start

    A API estará disponível em http://localhost:3000.

Uso

A API oferece os seguintes endpoints para gerenciamento de produtos e vendas:
Produtos

    GET /products: Lista todos os produtos.
    GET /products/:id: Retorna os detalhes de um produto específico.
    POST /products: Cria um novo produto.
    PUT /products/:id: Atualiza um produto existente.
    DELETE /products/:id: Exclui um produto.

Vendas

    GET /sales: Lista todas as vendas.
    GET /sales/:id: Retorna os detalhes de uma venda específica.
    POST /sales: Cria uma nova venda.
    DELETE /sales/:id: Exclui uma venda.

Estrutura do Projeto

bash

store-manager-api/
src 
    ├── controllers/
│   ├── product.controller.js
│   ├── sales.controller.js
├── middlewares/
│   ├── validateProduct.js
│   ├── validateSales.js
├── models/
│   ├── product.model.js
│   ├── sales.model.js
│   ├── connection.js
├── services/
│   ├── product.service.js
│   ├── sales.service.js
├── .env
├── app.js
├── package.json
└── README.md

Endpoints
Produtos
GET /products

Retorna todos os produtos.

Resposta:

json

[
  {
    "id": 1,
    "name": "Produto 1"
  },
  {
    "id": 2,
    "name": "Produto 2"
  }
]

GET /products/:id

Retorna um produto específico.

Parâmetros:

    id (obrigatório): ID do produto.

Resposta:

json

{
  "id": 1,
  "name": "Produto 1"
}

POST /products

Cria um novo produto.

Corpo da Requisição:

json

{
  "name": "Novo Produto"
}

Resposta:

json

{
  "id": 3,
  "name": "Novo Produto"
}

PUT /products/:id

Atualiza um produto existente.

Parâmetros:

    id (obrigatório): ID do produto.

Corpo da Requisição:

json

{
  "name": "Produto Atualizado"
}

Resposta:

json

{
  "id": 1,
  "name": "Produto Atualizado"
}

DELETE /products/:id

Exclui um produto.

Parâmetros:

    id (obrigatório): ID do produto.

Resposta:

json

{
  "id": 1
}

Vendas
GET /sales

Retorna todas as vendas.

Resposta:

json

[
  {
    "saleId": 1,
    "date": "2023-01-01T00:00:00.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 2,
    "date": "2023-01-01T00:00:00.000Z",
    "productId": 2,
    "quantity": 1
  }
]

GET /sales/:id

Retorna uma venda específica.

Parâmetros:

    id (obrigatório): ID da venda.

Resposta:

json

{
  "saleId": 1,
  "date": "2023-01-01T00:00:00.000Z",
  "productId": 1,
  "quantity": 2
}

POST /sales

Cria uma nova venda.

Corpo da Requisição:

json

[
  {
    "productId": 1,
    "quantity": 2
  },
  {
    "productId": 2,
    "quantity": 1
  }
]

Resposta:

json

{
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ]
}

DELETE /sales/:id

Exclui uma venda.

Parâmetros:

    id (obrigatório): ID da venda.

Resposta:

json

{
  "id": 1
}

Modelos de Dados
Produto

    id: Número inteiro.
    name: String.

Venda

    saleId: Número inteiro.
    date: Data e hora.
    productId: Número inteiro.
    quantity: Número inteiro.

Validações
Produto

    validateProductName: Verifica se o nome do produto está presente e é válido.
    validatePutProdutoIdAndName: Verifica se o ID e o nome do produto são válidos para atualização.

Venda

    validateId: Verifica se o ID do produto é válido.
    validateQuantity: Verifica se a quantidade é válida.
    validateQuantityType: Verifica se a quantidade é do tipo numérico.
