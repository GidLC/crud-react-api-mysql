import React, { useState, useEffect, useContext } from "react";
import Formulario from '../../components/Formulario';
import apiAuth from "../../services/apiAuth";
import AuthContext from "../../contexts/autenticaLogin";


const Login = () => {
    const Auth = useContext(AuthContext)
    const [dadosDoFormulario, setDadosDoFormulario] = useState({});

    const listaForm = [
        { nome: 'email', label: 'E-mail:', tipo: 'email' },
        { nome: 'senha', label: 'Senha:', tipo: 'password' },
    ];

    const enviarFormulario = async (dadosDoFormulario) => {
        try {
            const usuario = await apiAuth.autenticaLogin(dadosDoFormulario)
            Auth.login(usuario)
        } catch (error) {
            console.error(error)
        }
    };

    return (
            <div className="classeCSS">
                <h1>LOGIN</h1>
                {<Formulario
                    campos={listaForm}
                    onSubmit={enviarFormulario}
                    dadosDoFormulario={dadosDoFormulario}
                    setDadosDoFormulario={setDadosDoFormulario}
                    botao={'ENTRAR'}
                />}
                <br/>
                <a><button>ESQUECI A SENHA</button></a>
                <br/><br/>
                <a href="/cadUsuario"><button>CADASTRAR-SE</button></a>
            </div>
    )
}

export default Login;