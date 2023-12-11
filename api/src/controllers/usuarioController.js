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
    const {email, senha} = req.body;
    usuarioModel.loginUsuario(email, senha, (err, resultado) => {
      if (err) {
        console.error('Erro ao encontrar  usuário:', err);
        return res.status(500).json({ error: 'Erro ao encontrar o usuário' });
      }
      res.status(200).json({ message: 'Usuário encontrado com sucesso', resultado });
    });
  };


module.exports = {cadastraUsuario, loginUsuario}