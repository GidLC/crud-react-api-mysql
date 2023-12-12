import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import CadastroProduto from "../Pages/CadastroProdutos/CadastroProdutos";
import CadastroUsuarios from "../Pages/CadastroUsuarios";
import Login from "../Pages/Login";
import { AutenticacaoProvider, AuthContext } from "../contexts/autenticaLogin";
import { useContext } from "react";
import EditaUsuario from "../Pages/EditaUsuario";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { autenticado } = useContext(AuthContext) ?? {};
        if (autenticado == true) {
            return children
        } else {
            return <Navigate to='/' />
        }
    }
    
    return (
        <Router>
            <AutenticacaoProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/cadUsuario" element={<CadastroUsuarios />} />
                    <Route exact path="/cadProduto" element={<Private><CadastroProduto /></Private>} />
                    <Route exact path="/editaUsuario/:id" element={<Private><EditaUsuario/></Private>}/>
                </Routes>
            </AutenticacaoProvider>
        </Router>
    )
}

export default AppRoutes