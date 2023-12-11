const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastra-usuario', usuarioController.cadastraUsuario)
router.post('/login', usuarioController.loginUsuario)

module.exports = router;