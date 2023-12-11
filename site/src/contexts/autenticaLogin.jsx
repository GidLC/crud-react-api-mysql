import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AutenticacaoProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});
    const [autenticado, setAutenticado] = useState(false)
    const navegador = useNavigate();

    const login = (userData) => {
        setUsuario(userData.resultado[0]);
        setAutenticado(true)
        navegador("/cadProduto")
    };

    const logout = () => {
        setUsuario({});
        navegador("/");
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

export default AuthContext