import React from 'react';
import CatalogRow from './../CatalogoRow/CatalogoRow';
import './CatalogoTable.css';

const CatalogoTable = ({ catalogItems, handleAddQuantity, handleDeliverToProduction }) => {
  return (
    <table className="catalog-table">
      <thead>
        <tr>
          <th className="insumo" >Insumo</th>
          <th  className="cantidad" >Cantidad</th>
          <th className='act'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {catalogItems.map(item => (
          <CatalogRow
            key={item.ID_CINSUMOALMACEN}
            item={item}
            onAddQuantity={handleAddQuantity}
            onDeliverToProduction={handleDeliverToProduction}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CatalogoTable;
