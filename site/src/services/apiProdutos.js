import API_URL from "./apiConfig";

const apiProdutos = {

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
    

    async getProdutos(id_usuario) {
        const resposta = await fetch(`${API_URL}/produtos/listar-produtos/${id_usuario}`);
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

export default apiProdutos;
