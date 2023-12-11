import React, { useState, useEffect } from 'react';
import './Formulario.css';

<<<<<<< HEAD
const Formulario = ({ campos, onSubmit, dadosDoFormulario, setDadosDoFormulario, editar }) => {
=======
const Formulario = ({ campos, onSubmit, itemSelecionado, onUpdate }) => {
  const [dadosDoFormulario, setDadosDoFormulario] = useState({});
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5

  const eventoChange = (campo, valor) => {
    setDadosDoFormulario({
      ...dadosDoFormulario,
      [campo]: valor,
    });
  };

  const eventoSubmit = (e) => {
<<<<<<< HEAD
    e.preventDefault();
    console.log(dadosDoFormulario)
    onSubmit(dadosDoFormulario);
=======
    //e.preventDefault();
    if(itemSelecionado){
      onUpdate(dadosDoFormulario)
    }else{
      onSubmit(dadosDoFormulario);
    }
>>>>>>> 524621787af7393346fc293904f27919e1b1a5f5
  };

  useEffect(() => {
    if (itemSelecionado) {
      setDadosDoFormulario(itemSelecionado.resultado[0]);
      console.log(dadosDoFormulario)
    }
  }, [itemSelecionado]);
  
  return (
    <form onSubmit={eventoSubmit}>
      {campos.map((campo) => (
        <div key={campo.nome} className='divForm'>
          <label className='largura'>{campo.label}</label>
          <input
            type={campo.tipo}
            value={dadosDoFormulario[campo.nome] || ''}
            onChange={(e) => eventoChange(campo.nome, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">{editar == true ? "SALVAR EDIÇÃO" : "ENVIAR"}</button>
    </form>
  );
};

export default Formulario;
