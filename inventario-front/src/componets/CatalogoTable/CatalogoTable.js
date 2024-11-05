import React from 'react';
import CatalogRow from './../CatalogoRow/CatalogoRow';
import './CatalogoTable.css';

const CatalogoTable = ({ catalogItems, handleAddQuantity, handleDeliverToProduction }) => {
  return (
    <table className="catalog-table">
      <thead>
        <tr>
          <th>ID Insumo</th>
          <th>Insumo</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {catalogItems.map(item => (
          <CatalogRow
            key={item.id_insumo}
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
