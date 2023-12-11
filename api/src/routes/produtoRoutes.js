// produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/salvar-produto', produtoController.salvarProduto);
router.put('/editar-produto/:id', produtoController.editarProduto);
router.delete('/excluir-produto/:id', produtoController.excluirProduto);
router.get('/listar-produtos', produtoController.listarProdutos);
<<<<<<< HEAD
router.get('/busca-produto/:id', produtoController.buscaProduto)
=======
router.get('/listar-produtos/:id', produtoController.listarProdutoId);

>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

module.exports = router;
