// produtoController.js
const ProdutoModel = require('../models/produtoModel');

const salvarProduto = (req, res) => {
  const { id_usuario, nome, preco, qtd } = req.body;

  ProdutoModel.salvarProduto(id_usuario, nome, preco, qtd, (err, resultado) => {
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

const listarProdutos = (req, res) => {
  const { id_usuario } = req.params;
  console.log(id_usuario)
  ProdutoModel.listarProdutos(id_usuario, (err, resultados) => {
    if (err) {
      console.error('Erro ao listar os produtos:', err);
      return res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
    res.status(200).json(resultados);
  });
};

module.exports = { salvarProduto, editarProduto, excluirProduto, listarProdutos, buscaProduto };

