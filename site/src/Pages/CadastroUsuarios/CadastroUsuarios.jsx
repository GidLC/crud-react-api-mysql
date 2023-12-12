import React from "react";
import { useState, useEffect } from "react";
import Formulario from "../../components/Formulario";
import apiAuth from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

const CadastroUsuarios = () => {
    const [dadosDoFormulario, setDadosDoFormulario] = useState({});
    const navegador = useNavigate();

    const listaForm = [
        { nome: 'nome', label: 'Nome:', tipo: 'text' },
        { nome: 'email', label: 'E-mail:', tipo: 'email' },
        { nome: 'senha', label: 'Senha:', tipo: 'password' },
        { nome: 'confSenha', label: 'Confirme a Senha:', tipo: 'password' },
        { nome: 'nasc', label: 'Data de Nascimento:', tipo: 'date' }
    ];

    useEffect(() => {

    }, []);

    const buscaUsuario = async (id) => {
        try {
            const usuario = await apiAuth.getUsuario(id)
            setDadosDoFormulario(usuario);
        } catch (error) {
            console.error('Erro ao encontrar usuario:', error.message);
        }
    };

    const enviarFormulario = async (dadosDoFormulario) => {
        try {
            if (dadosDoFormulario.senha == dadosDoFormulario.confSenha) {
                apiAuth.cadastraUsuario(dadosDoFormulario)
                alert(`Usuário cadastrado com sucesso`)
                navegador("/")
            } else {
                alert(`As senhas não conferem`);
            }

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="classeCSS">
            <h1>Cadastro de Usuário</h1>
            {<Formulario
                campos={listaForm}
                onSubmit={enviarFormulario}
                dadosDoFormulario={dadosDoFormulario}
                setDadosDoFormulario={setDadosDoFormulario}
                botao={'CADASTRAR'}
            />}
        </div>
    );
}

export default CadastroUsuarios