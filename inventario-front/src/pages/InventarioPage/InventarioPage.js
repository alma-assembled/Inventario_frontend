import React, { useState } from 'react';import CatalogTable from '../../componets/CatalogoTable/CatalogoTable';

import './../InventarioPage/InventarioPage.css'

function InventarioPage() {
    const [catalogItems, setCatalogItems] = useState([
        { id_insumo: 1, insumo: 'Insumo A', cantidad: 10 },
        { id_insumo: 2, insumo: 'Insumo B', cantidad: 20 },
        { id_insumo: 3, insumo: 'Insumo C', cantidad: 15 },
        { id_insumo: 4, insumo: 'Insumo A', cantidad: 10 },
        { id_insumo: 5, insumo: 'Insumo B', cantidad: 20 },
        { id_insumo: 6, insumo: 'Insumo C', cantidad: 15 },
        { id_insumo: 7, insumo: 'Insumo A', cantidad: 10 },
        { id_insumo: 8, insumo: 'Insumo B', cantidad: 20 },
        { id_insumo: 9, insumo: 'Insumo C', cantidad: 15 },
        { id_insumo: 10, insumo: 'Insumo A', cantidad: 10 },
        { id_insumo: 11, insumo: 'Insumo B', cantidad: 20 },
        { id_insumo: 12, insumo: 'Insumo C', cantidad: 15 },
    ]);
    
    const handleAddQuantity = (id_insumo) => {
        setCatalogItems(prevItems =>
          prevItems.map(item =>
            item.id_insumo === id_insumo ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        );
    };

    const handleDeliverToProduction = (id_insumo) => {
        alert(`Entregar ${id_insumo} a producción`);
      };

    return (
        <div className="inventory-page">
              <div className='contenet-tabla'>
                <CatalogTable
                catalogItems={catalogItems}
                handleAddQuantity={handleAddQuantity}
                handleDeliverToProduction={handleDeliverToProduction}
                />
              </div> 
      </div>
    );
}

export default InventarioPage;