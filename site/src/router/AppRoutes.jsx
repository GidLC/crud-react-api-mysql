import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CadastroProduto from "../Pages/CadastroProdutos/CadastroProdutos";
import CadastroUsuarios from "../Pages/CadastroUsuarios";
import Login from "../Pages/Login";
import { AutenticacaoProvider, AuthContext } from "../contexts/autenticaLogin";
import EditaUsuario from "../Pages/EditaUsuario";

const Private = ({ children}) => {
    const { autenticado } = useContext(AuthContext);

    return autenticado == true ? (
        children
    ) : (
        <Navigate to="/" />
    );
};

const AppRoutes = () => {
    return (
        <Router>
            <AutenticacaoProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/cadUsuario" element={<CadastroUsuarios />}/>
                    <Route exact path="/cadProduto" element={<CadastroProduto />}/>
                    <Route exact path="/editaUsuario/:id" element={<EditaUsuario />}/>
                </Routes>
            </AutenticacaoProvider>
        </Router>
    )
}

export default AppRoutes;
