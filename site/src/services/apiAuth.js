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

    async autenticaLogin (dadosDoFormulario)  {
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
    }

}

export default apiAuth;