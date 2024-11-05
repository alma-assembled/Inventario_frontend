import React from 'react';

const CatalogoRow = ({ item, onAddQuantity, onDeliverToProduction }) => {
  return (
    <tr>
      <td>{item.id_insumo}</td>
      <td>{item.insumo}</td>
      <td>{item.cantidad}</td>
      <td>
        <button onClick={() => onAddQuantity(item.id_insumo)}>Agregar</button>
        <button onClick={() => onDeliverToProduction(item.id_insumo)}>Entregar</button>
      </td>
    </tr>
  );
};

export default CatalogoRow;
