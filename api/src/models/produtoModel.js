// produtoModel.js
const { connection } = require('../config');

class ProdutoModel {
  static salvarProduto(id_usuario, nome, preco, qtd, callback) {
    const query = 'INSERT INTO produto (nome, preco, qtd, id_usuario) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, preco, qtd, id_usuario], (err, results) => {
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

  static listarProdutos(id_usuario, callback) {
    const query = 'SELECT * FROM produto where id_usuario = ?';
    connection.query(query, [id_usuario], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }


}

module.exports = ProdutoModel;
