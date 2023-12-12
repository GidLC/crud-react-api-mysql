import React, { useState, useEffect, useContext } from 'react';
import './CadastroProdutos.css';
import Formulario from '../../components/Formulario';
import apiProdutos from '../../services/apiProdutos';
import Tabela from '../../Components/Tabela';
import Header from '../../Components/Header/Header';

//Esse arquivo não realiza execuções, apenas crias os métodos, tabelas e funções
const CadastroProduto = () => {
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [dadosDoFormulario, setDadosDoFormulario] = useState({});
  const [editar, setEditar] = useState(false)
  const usuarioArmazenado = sessionStorage.getItem('usuario');

  const listaForm = [
    { nome: 'nome', label: 'Nome', tipo: 'text' },
    { nome: 'preco', label: 'Preço unitário', tipo: 'number' },
    { nome: 'qtd', label: 'Quantidade', tipo: 'number' },
  ];

  const colunasProdutos = ['id', 'nome', 'preco', 'qtd'];

  useEffect(() => {
    carregarProdutos();
    setDadosDoFormulario({"id_usuario": (JSON.parse(usuarioArmazenado).id_usuario)})
  }, []);

  const enviarFormulario = async (dadosDoFormulario) => {
    try {
      await apiProdutos.gravarProduto(dadosDoFormulario)
      setMensagem('Produto salvo com sucesso');
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao salvar o produto:', error.message);
      setMensagem('Erro ao salvar o produto');
    }
  };

  const carregarProdutos = async () => {
    try {
      const dados = await apiProdutos.getProdutos((JSON.parse(usuarioArmazenado).id_usuario));
      setProdutos(dados);
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error.message);
    }
  };

  const excluirProduto = async (id) => {
    try {
      await apiProdutos.excluirProduto(id);
      const novaLista = produtos.filter((produto) => produto.id !== id);
      setProdutos(novaLista);
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error.message);
    }
  };

  const editaProduto = async (dadosDoFormulario) => {
    try {
      await apiProdutos.editaProduto(dadosDoFormulario);
      setDadosDoFormulario({});
      setEditar(false)
    } catch (error) {
      console.error('Erro ao editar o produto:', error.message);
    }
    carregarProdutos();
  };

  const buscaProduto = async (id) => {
    try {
      const produto = await apiProdutos.getProduto(id);
      setDadosDoFormulario(produto);
      console.log(typeof (produto))
      setEditar(true);
      setMensagem('')
    } catch (error) {
      console.error('Erro ao buscar o produto:', error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="classeCSS">
        <h1>Cadastro de Produto</h1>
        {<Formulario
          campos={listaForm}
          onSubmit={editar == true ? editaProduto : enviarFormulario}
          dadosDoFormulario={dadosDoFormulario}
          setDadosDoFormulario={setDadosDoFormulario}
          botao={editar == true ? "SALVAR EDIÇÃO" : "CADASTRAR"} />}
        {mensagem && <p>{mensagem}</p>}

        <h2>Produtos Cadastrados</h2>
        <Tabela
          dados={produtos}
          onExcluirItem={excluirProduto}
          onEditarItem={(id) => buscaProduto(id)}
          colunas={colunasProdutos}
        />
      </div>
    </>
  );
};

export default CadastroProduto;
