import React, { useContext } from "react";
import AuthContext from "../../contexts/autenticaLogin";

const Header = () => {
    const Auth = useContext(AuthContext)

    return (
        <header>
            <h2>Bem vindo <a href="/editaUsuario">{Auth.usuario.nome_usuario}</a></h2>
            <button onClick={Auth.logout}>SAIR</button>
        </header>
    )
}

export default Header