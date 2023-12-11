import React, { useState, useEffect } from 'react';
import './CadastroProdutos.css';
import Formulario from '../../components/Formulario';
import api from '../../services/api';
import Tabela from '../../Components/Tabela';

//Esse arquivo não realiza execuções, apenas crias os métodos, tabelas e funções
const CadastroProduto = () => {
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState([]);
<<<<<<< HEAD
  const [dadosDoFormulario, setDadosDoFormulario] = useState({});
  const [editar, setEditar] = useState(false)
=======
  const [itemSelecionado, setItemSelecionado] = useState(null);

>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

  const listaForm = [
    { nome: 'nome', label: 'Nome', tipo: 'text' },
    { nome: 'preco', label: 'Preço unitário', tipo: 'number' },
    { nome: 'qtd', label: 'Quantidade', tipo: 'number' },
  ];

  const colunasProdutos = ['id', 'nome', 'preco', 'qtd'];

  useEffect(() => {
    carregarProdutos();
  }, []);

  const enviarFormulario = async (dadosDoFormulario) => {
    try {
      await api.gravarProduto(dadosDoFormulario)
      setMensagem('Produto salvo com sucesso');
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao salvar o produto:', error.message);
      setMensagem('Erro ao salvar o produto');
    }
  };

<<<<<<< HEAD
  const carregarProdutos = async () => {
    try {
      const dados = await api.getProdutos();
      setProdutos(dados);
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error.message);
    }
  };
=======
  const editarFormulario = async (dadosDoFormulario) => {
    try {
      await api.atualizarProduto(dadosDoFormulario)

      setMensagem('Produto editado com sucesso');
    } catch (error) {
      console.error('Erro ao editar o produto:', error.message);
      setMensagem('Erro ao editar o produto');
    }
  };


  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await api.getProdutos();
        setProdutos(dados);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error.message);
      }
    };

    carregarProdutos();
  }, []);
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

  const excluirProduto = async (id) => {
    try {
      await api.excluirProduto(id);
      const novaLista = produtos.filter((produto) => produto.id !== id);
      setProdutos(novaLista);
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error.message);
    }
  };

<<<<<<< HEAD
  const editaProduto = async (dadosDoFormulario) => {
    try {
      await api.editaProduto(dadosDoFormulario);
      setDadosDoFormulario({});
      setEditar(false)
    } catch (error) {
      console.error('Erro ao editar o produto:', error.message);
    }
    carregarProdutos();
  };

  const buscaProduto = async (id) => {
    try {
      const produto = await api.getProduto(id);
      setDadosDoFormulario(produto);
      console.log(typeof(produto))
      setEditar(true);
      setMensagem('')
    } catch (error) {
      console.error('Erro ao buscar o produto:', error.message);
    }
  };
=======
  const editarProduto = async (id) => {
    try {
      const produtoSelecionado = await api.buscarProdutoPorId(id);
      setItemSelecionado(produtoSelecionado);
      console.log(itemSelecionado)
    } catch (error) {
      console.error('Erro ao carregar dados do produto para edição:', error.message);
    }
  };
  
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

  return (
    <div className="classeCSS">
      <h1>Cadastro de Produto</h1>
<<<<<<< HEAD
      {<Formulario
        campos={listaForm}
        onSubmit={editar == true ? editaProduto : enviarFormulario}
        dadosDoFormulario={dadosDoFormulario}
        setDadosDoFormulario={setDadosDoFormulario}
        editar={editar} />}
=======
      <Formulario 
        campos={listaForm} 
        onSubmit={enviarFormulario} 
        itemSelecionado={itemSelecionado}
        onUpdate={editarFormulario}/>
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5
      {mensagem && <p>{mensagem}</p>}

      <h2>Produtos Cadastrados</h2>
      <Tabela
        dados={produtos}
        onExcluirItem={excluirProduto}
<<<<<<< HEAD
        onEditarItem={(id) => buscaProduto(id)}
=======
        onEditarItem={editarProduto}
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5
        colunas={colunasProdutos}
      />
    </div>
  );
};

export default CadastroProduto;
