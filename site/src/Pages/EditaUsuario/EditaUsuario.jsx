import React, { useState, useEffect, useContext } from "react";
import apiAuth from "../../services/apiAuth";
import AuthContext from "../../contexts/autenticaLogin";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const EditaUsuario = () => {
    const parametros = useParams();
    const idUsuario = parametros.id;
    const navegador = useNavigate();
    const Auth = useContext(AuthContext);

    const [dadosDoFormulario, setDadosDoFormulario] = useState({});

    useEffect(() => {
        buscaUsuario(idUsuario)
    }, [idUsuario]);

    const buscaUsuario = async (id) => {
        try {
            const usuario = await apiAuth.getUsuario(id)
            setDadosDoFormulario(usuario);
        } catch (error) {
            console.error('Erro ao encontrar usuário:', error.message);
        }
    }

    const eventoSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiAuth.atualizarUsuário(dadosDoFormulario)
            alert(`Usuário Editado com sucesso`)
            navegador("/cadProduto")
        } catch (error) {
            console.error('Erro ao editar usuário:', error.message);
        }
    };

    const excluirUsuario = async (id) => {
        const conf = confirm("Deseja excluir seu usuário?")
        if (conf == true) {
            try {
                await apiAuth.excluirUsuario(id)
                alert(`Usuário excluido com sucesso, deslogando`)
                Auth.logout();
            } catch (error) {
                console.error('Erro ao excluir o produto:', error.message);
            }
        }
    };

    const eventoChange = (e) => {
        const { name, value } = e.target;
        setDadosDoFormulario({ ...dadosDoFormulario, [name]: value });
    };

    return (
        <div className="classeCSS">
            <h1>SEU CADASTRO</h1>
            <form onSubmit={eventoSubmit}>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome_usuario"
                    value={dadosDoFormulario.nome_usuario || ''}
                    onChange={eventoChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email_usuario"
                    value={dadosDoFormulario.email_usuario || ''}
                    onChange={eventoChange}
                />
                <label>Nascimento:</label>
                <input
                    type="date"
                    name="nasc_usuario"
                    value={dadosDoFormulario.nasc_usuario || ''}
                    onChange={eventoChange}
                />
                <button type="submit">Salvar</button>
            </form>
            <button onClick={() => excluirUsuario(idUsuario)}>EXCLUIR CONTA</button>

        </div>
    );
}

export default EditaUsuario;
