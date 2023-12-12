const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastra-usuario', usuarioController.cadastraUsuario)
router.post('/login', usuarioController.loginUsuario)
router.get('/busca-usuario/:id', usuarioController.buscaUsuario)
router.put('/edita-usuario', usuarioController.editarUsuario)
router.delete('/excluir-usuario/:id', usuarioController.excluirUsuario)

module.exports = router;