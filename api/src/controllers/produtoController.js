// produtoController.js
const ProdutoModel = require('../models/produtoModel');

const salvarProduto = (req, res) => {
  const { nome, preco, qtd } = req.body;

  // Chame o método salvarProduto do modelo
  ProdutoModel.salvarProduto(nome, preco, qtd, (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar o produto:', err);
      return res.status(500).json({ error: 'Erro ao salvar o produto' });
    }
    res.status(200).json({ message: 'Produto salvo com sucesso', resultado });
  });
};

const buscaProduto = (req, res) => {
  const { id } = req.params;
  ProdutoModel.buscarProdutoPorId(id, (err, resultados) => {
    if (err) {
      console.error('Erro ao listar os produtos:', err);
      return res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
    res.status(200).json(resultados);
  });
};


const editarProduto = (req, res) => {
  const {id, nome, preco, qtd } = req.body;

  ProdutoModel.atualizarProduto(id, nome, preco, qtd, (err, resultado) => {
    if (err) {
      console.error('Erro ao atualizar o produto:', err);
      return res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
    res.status(200).json({ message: 'Produto atualizado com sucesso', resultado });
  });
};

const excluirProduto = (req, res) => {
  const { id } = req.params;

  ProdutoModel.excluirProduto(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao excluir o produto:', err);
      return res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
    res.status(200).json({ message: 'Produto excluído com sucesso', resultado });
  });
};

const listarProdutoId = (req, res) => {
  const { id } = req.params;

  ProdutoModel.listarProdutoId(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao Buscar o produto:', err);
      return res.status(500).json({ error: 'Erro ao Buscar o produto' });
    }
    res.status(200).json({ message: 'Produto encontrado', resultado });
  });
};

const listarProdutos = (req, res) => {
  ProdutoModel.listarProdutos((err, resultados) => {
    if (err) {
      console.error('Erro ao listar os produtos:', err);
      return res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
    res.status(200).json(resultados);
  });
};

<<<<<<< HEAD
module.exports = { salvarProduto, editarProduto, excluirProduto, listarProdutos, buscaProduto };
=======
module.exports = { salvarProduto, atualizarProduto, excluirProduto, listarProdutos, listarProdutoId };
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

