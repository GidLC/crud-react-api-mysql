// produtoModel.js
const { connection } = require('../config');

class ProdutoModel {
  static salvarProduto(nome, preco, qtd, callback) {
    const query = 'INSERT INTO produto (nome, preco, qtd) VALUES (?, ?, ?)';
    connection.query(query, [nome, preco, qtd], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static buscarProdutoPorId(id, callback) {
    const query = 'SELECT * FROM produto WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Produto não encontrado
      }
      callback(null, results[0]);
    });
  }


  // Outros métodos, como atualizarProduto, excluirProduto, listarProdutos, etc.


  static atualizarProduto(id, nome, preco, qtd, callback) {
    const query = 'UPDATE produto SET nome=?, preco=?, qtd=? WHERE id=?';
    connection.query(query, [nome, preco, qtd, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static excluirProduto(id, callback) {
    const query = 'DELETE FROM produto WHERE id=?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
<<<<<<< HEAD
=======
  
  static listarProdutoId(id, callback) {
    const query = 'SELECT * FROM produto WHERE id=?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

  static listarProdutos(callback) {
    console.log(`Produtos Listados`)
    const query = 'SELECT * FROM produto';
    connection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }


}

module.exports = ProdutoModel;
