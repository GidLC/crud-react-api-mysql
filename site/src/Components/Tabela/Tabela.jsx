import React from 'react';
import './Tabela.css'

const Tabela= ({ dados, onExcluirItem, onEditarItem, colunas }) => {
  return (
    <table>
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={coluna}>{coluna}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            {colunas.map((coluna) => (
              <td key={`${item.id}-${coluna}`}>{item[coluna]}</td>
            ))}
            <td>
              <button onClick={() => onExcluirItem(item.id)}>EXCLUIR</button>
              <button onClick={() => onEditarItem(item.id)}>EDITAR</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
