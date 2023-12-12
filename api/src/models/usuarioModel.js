const { connection } = require('../config');
const crypto = require('crypto')


class UsuarioModel {
  static cadastraUsuario(nome, email, senha, nasc, callback) {
    const senhaHash = crypto.createHash('sha256').update(senha).digest('hex');
    const query = 'INSERT INTO usuario (nome_usuario, email_usuario, senha_usuario, nasc_usuario) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, email, senhaHash, nasc], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static loginUsuario(email, senha, callback) {
    const senhaHash = crypto.createHash('sha256').update(senha).digest('hex')
    const query = `SELECT * FROM usuario where email_usuario = ? AND senha_usuario = ?`;
    connection.query(query, [email, senhaHash], (err, results) => {
      if (err) {
        return callback(err, null);
      } else if (results.length == 0) {
        err = `Usuário não encontrado na base de dados`;
        return callback(err, null)
      } else {
        console.log(results)
        callback(null, results);
      }
    })
  }

  static buscarUsuarioPorId(id, callback) {
    const query = 'SELECT * FROM usuario WHERE id_usuario = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  }

  static editarUsuario(nome_usuario, email_usuario, nasc_usuario, id_usuario, callback) {
    const query = 'UPDATE usuario SET nome_usuario=?, email_usuario=?, nasc_usuario=? WHERE id_usuario=?';
    connection.query(query, [nome_usuario, email_usuario, nasc_usuario, id_usuario], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static excluirUsuario(id, callback) {
    const query = 'DELETE FROM usuario WHERE id_usuario=?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

}

module.exports = UsuarioModel;