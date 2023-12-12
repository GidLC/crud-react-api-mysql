import API_URL from "./apiConfig";

const apiAuth = {

    async cadastraUsuario(dadosDoFormulario) {
        //console.log(dadosDoFormulario)
        const resposta = await fetch(`${API_URL}/usuarios/cadastra-usuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario),
        });
        if (!resposta.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }
    },

    async autenticaLogin(dadosDoFormulario) {
        const resposta = await fetch(`${API_URL}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoFormulario)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao autenticar usuário')
        }

        return await resposta.json()
    },

    async getUsuario(id) {
        const resposta = await fetch(`${API_URL}/usuarios/busca-usuario/${id}`);
        if (!resposta.ok) {
            throw new Error('Erro ao carregar usuário');
        }
        return resposta.json();
    },

    async atualizarUsuário(dadosDoFormulario) {
        const resposta = await fetch(`${API_URL}/usuarios/edita-usuario`, {
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

    async excluirUsuario(id) {
        console.log(id)
        const resposta = await fetch(`${API_URL}/usuarios/excluir-usuario/${id}`, {
            method: 'DELETE',
        });
        if (!resposta.ok) {
            throw new Error('Erro ao excluir usuário');
        }
    },

}

export default apiAuth;