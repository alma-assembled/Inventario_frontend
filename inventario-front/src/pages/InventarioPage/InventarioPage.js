import React, { useState , useEffect} from 'react';
import CatalogTable from '../../componets/CatalogoTable/CatalogoTable';
import insumosService from '../../services/inventario/inventarioService';
import ModalAgregarInventario from '../../componets/ModalAgregarInventario/ModalAgregarInventario';

import './../InventarioPage/InventarioPage.css';

function InventarioPage() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInventario')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      insumosService.setToken(user.token)
    }
  }, [])
  
  useEffect(() => {
    insumosService.fetch_insumos_cantidades()
      .then(initial => {
        setCatalogItems(initial.Data); 
        setFilteredItems(initial.Data); // Inicializa con todos los datos
      })
      .catch(error => {
        console.error('Error fetching :', error);
      });
  }, []);


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
  
  // Handle filter change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    // Filter catalogItems based on the filter input
    const filtered = catalogItems.filter(item =>
      item.INSUMO && item.INSUMO.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleAddInsumo = (newItem) => {
    setCatalogItems([...catalogItems, newItem]);
  };

  return (
      <div className="inventory-page">
        <div className='form-space'>
          <div className="filter-form">
            <h4>BUSCAR: </h4>
            <input 
              type="text" 
              placeholder="Buscar Insumo" 
              value={filter}
              onChange={handleFilterChange}
              className="filter-input"
            />

            <div className='buttons'>
              <button onClick={() => setIsModalOpen(true)} className='botton'>AGREGAR INSUMOS</button>
              <button className='botton'>ENTREGAR PRODUCCCION</button>
            </div>
          </div>
        </div>
        <div className='contenet-tabla'>
          <CatalogTable
          catalogItems={filteredItems}
          handleAddQuantity={handleAddQuantity}
          handleDeliverToProduction={handleDeliverToProduction}
          />
        </div> 
        <ModalAgregarInventario
        onClose={() => setIsModalOpen(false)}
        onAddInsumo={handleAddInsumo}
        isOpen={isModalOpen}
      />
    </div>
    );
}

export default InventarioPage;