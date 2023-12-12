const usuarioModel = require('../models/usuarioModel')

const cadastraUsuario = (req, res) => {
  const { nome, email, nasc, senha } = req.body;
  console.log(`Conroller`)

  usuarioModel.cadastraUsuario(nome, email, senha, nasc, (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar o produto:', err);
      return res.status(500).json({ error: 'Erro ao salvar o produto' });
    }
    res.status(200).json({ message: 'Produto salvo com sucesso', resultado });
  });
};

const loginUsuario = (req, res) => {
  const { email, senha } = req.body;
  usuarioModel.loginUsuario(email, senha, (err, resultado) => {
    if (err) {
      console.error('Erro ao encontrar  usuário:', err);
      return res.status(500).json({ error: 'Erro ao encontrar o usuário' });
    }
    res.status(200).json({ message: 'Usuário encontrado com sucesso', resultado });
  });
};

const buscaUsuario = (req, res) => {
  const { id } = req.params;
  usuarioModel.buscarUsuarioPorId(id, (err, resultados) => {
    if (err) {
      console.error('Erro ao encontrar usuário:', err);
      return res.status(500).json({ error: 'Erro ao encontrar usuário' });
    }
    res.status(200).json(resultados);
  });
};

const editarUsuario = (req, res) => {
  const {nome_usuario, email_usuario, nasc_usuario, id_usuario } = req.body;

  usuarioModel.editarUsuario(nome_usuario, email_usuario, nasc_usuario, id_usuario, (err, resultado) => {
    if (err) {
      console.error('Erro ao editar usuário:', err);
      return res.status(500).json({ error: 'Erro ao editar usuário' });
    }
    res.status(200).json({ message: 'Usuário editado com sucesso', resultado });
  });
};

const excluirUsuario = (req, res) => {
  const { id } = req.params;

  usuarioModel.excluirUsuario(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao excluir usuário:', err);
      return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso', resultado });
  });
};

module.exports = { cadastraUsuario, loginUsuario, buscaUsuario, editarUsuario, excluirUsuario }