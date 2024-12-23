import React from 'react';
import './../CatalogoRow/CatalogoRow.css';
const CatalogoRow = ({ item, onAddQuantity, onDeliverToProduction }) => {
  const cantidadStyle = item.CANTIDAD <= 10 ? { color: 'red', fontWeight: 'bold' } : {};

  return (
    <tr>
      <td className="hidden" >{item.ID_CINSUMOALMACEN}</td>
      <td className='insu'>{item.INSUMO}</td>
      <td style={cantidadStyle} className='cant'>{item.CANTIDAD}</td>
      <td className='activ'>
        <button onClick={() => onAddQuantity(item.ID_CINSUMOALMACEN)}>Agregar</button>
        <button onClick={() => onDeliverToProduction(item.ID_CINSUMOALMACEN)}>Entregar</button>
      </td>
    </tr>
  );
};

export default CatalogoRow;
