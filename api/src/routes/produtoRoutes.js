// produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/salvar-produto', produtoController.salvarProduto);
router.put('/editar-produto/:id', produtoController.editarProduto);
router.delete('/excluir-produto/:id', produtoController.excluirProduto);
router.get('/listar-produtos', produtoController.listarProdutos);
router.get('/busca-produto/:id', produtoController.buscaProduto)

module.exports = router;
