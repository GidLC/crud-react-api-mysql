import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AutenticacaoProvider = ({ children }) => {
    const navegador = useNavigate();
    const [usuario, setUsuario] = useState({});
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        const usuarioArmazenado = sessionStorage.getItem('usuario');
        const autenticadoArmazenado = sessionStorage.getItem('autenticado');
        setUsuario(JSON.parse(usuarioArmazenado));
        setAutenticado(JSON.parse(autenticadoArmazenado));

    }, []);

    const login = (userData) => {
        setUsuario(userData.resultado[0]);
        setAutenticado(true);
        navegador("/cadProduto");

        sessionStorage.setItem('usuario', JSON.stringify(userData.resultado[0]));
        sessionStorage.setItem('autenticado', JSON.stringify(true));
    };

    const logout = () => {
        setUsuario({});
        setAutenticado(false);
        navegador("/");

        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('autenticado');
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout,
                autenticado
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
