import React, { useState } from 'react';
import './ModalAgregarInventario.css';
import ModalAgregarInsumo from './../ModalAgregarInsumo/ModalAgregarInsumo'
const ModalAgregarInventario = ({ onClose, onSave, isOpen }) => {
  const [id_tipo_inventario, setId_tipo_inventario] = useState('');
  const [id_cinsumoalmacen, sertid_cinsumoalmacen] = useState('');
  const [cantidad_almacen, setCantidad_almacen] = useState('');
  const [costo_unidad, setCosto_unidad] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    const newItem = {
      id_tipo_inventario,
      id_cinsumoalmacen,
      cantidad_almacen,
      costo_unidad
    };
    onSave(newItem);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveInsumo = (newItem) => {
    console.log('Nuevo insumo guardado:', newItem);
    // Aquí puedes agregar la lógica para manejar el nuevo insumo guardado, como hacer una petición a la API
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Agregar Inventario</h2>
        <form>
          <label>Tipo de Inventario:</label>
          <select value={id_tipo_inventario} onChange={(e) => setId_tipo_inventario(e.target.value)}>
            <option value="1">Producción</option>
          </select>

          <label>Producto:</label> 
          <div className='producto-space'>
            <select value={id_cinsumoalmacen} onChange={(e) => sertid_cinsumoalmacen(e.target.value)}>
            <option value="">Seleccionar...</option>
            <option value="Producto1">Producto 1</option>
            <option value="Producto2">Producto 2</option>
            <option value="Producto3">Producto 3</option>
            {/* Agrega más opciones de productos según sea necesario */}
            </select>
            <button onClick={(e) => {
              e.preventDefault(); // Evita la recarga de la página
              handleOpenModal();
            }}>+</button> 
          </div>
         
          <label>Cantidad:</label>
          <input
            type="number"
            value={cantidad_almacen}
            onChange={(e) => setCantidad_almacen(e.target.value)}
            min="0"
          />

          <label>Costo por Unidad:</label>
          <input
            type="number"
            value={costo_unidad}
            onChange={(e) => setCosto_unidad(e.target.value)}
            step="0.01"
            min="0"
          />

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="button-cancel">Cancelar</button>
            <button type="button" onClick={handleSave} className="button-save">Guardar</button>
          </div>
        </form>
      </div>
      <ModalAgregarInsumo 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveInsumo}
      />
    </div>
  );
};

export default ModalAgregarInventario;
