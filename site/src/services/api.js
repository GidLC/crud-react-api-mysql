// src/services/api.js
const API_URL = 'http://localhost:3000/api';

const api = {

    async gravarProduto(dadosDoFormulario) {
        const resposta = await fetch(`${API_URL}/produtos/salvar-produto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        });
        if (!resposta.ok) {
            throw new Error('Erro ao gravar o produto');
        }
    },
    

    async getProdutos() {
        const resposta = await fetch(`${API_URL}/produtos/listar-produtos`);
        if (!resposta.ok) {
            throw new Error('Erro ao carregar os produtos');
        }
        return resposta.json();
    },

    async getProduto(id) {
        const resposta = await fetch(`${API_URL}/produtos/busca-produto/${id}`);
        if (!resposta.ok) {
            throw new Error('Erro ao carregar os produtos');
        }
        return resposta.json();
    },

    async excluirProduto(id) {
        const resposta = await fetch(`${API_URL}/produtos/excluir-produto/${id}`, {
            method: 'DELETE',
        });
        if (!resposta.ok) {
            throw new Error('Erro ao excluir o produto');
        }
    },

    async editaProduto(dadosDoFormulario) {
        const resposta = await fetch(`${API_URL}/produtos/editar-produto/${dadosDoFormulario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),  
        });
        if (!resposta.ok) {
            throw new Error('Erro ao editar o produto API');
        }
        
    },

    // Adicione aqui outras chamadas de API conforme necessário

    
    async atualizarProduto(dadosDoFormulario) {
        const resposta = await fetch(`${API_URL}/produtos/atualizar-produto`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        });
        if (!resposta.ok) {
            throw new Error('Erro ao gravar o produto');
        }
    },

};

export default api;
