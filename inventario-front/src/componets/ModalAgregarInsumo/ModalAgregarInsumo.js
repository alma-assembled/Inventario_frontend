import React, { useState } from 'react';
import './ModalAgregarInsumo.css';

const ModalAgregarInsumo = ({ onClose, onSave, isOpen }) => {
  const [tipoInventario, setTipoInventario] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [unidad_medida, setUnidadMedida] = useState('');
  const [id_tipo_inventario, setid_tipo_inventario] = useState('');

  const handleSave = () => {
    const newItem = {
        id_tipo_inventario,
        descripcion,
        unidad_medida,
    };
    onSave(newItem);
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Agregar Nuevo  Insumo</h2>
        <form>
          <label>Tipo de Inventario:</label>
          <select value={tipoInventario} onChange={(e) => setTipoInventario(e.target.value)}>
            <option value="1">producción</option>
          </select>

          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

        <label>Unidad de Medida:</label>
          <select value={unidad_medida} onChange={(e) => setUnidadMedida(e.target.value)}>
            <option value="">Seleccionar...</option>
            <option value="P">Piezas</option>
            <option value="M">Militros</option>
            <option value="K">Kilos</option>
            <option value="L">Litros</option>
          </select>

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="button-cancel">Cancelar</button>
            <button type="button" onClick={handleSave} className="button-save">Guardar</button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default ModalAgregarInsumo;
