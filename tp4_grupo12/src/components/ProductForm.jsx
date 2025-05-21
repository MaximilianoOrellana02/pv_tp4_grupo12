import React, { useState } from "react";

import "./ProductForm.css";

const ProductForm = ({ onAddProducto }) => {
  const [producto, setProducto] = useState({
    id: "",
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    precioConDescuento: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const precioConDescuento =
      producto.precioUnitario * (1 - producto.descuento / 100);
    onAddProducto({ ...producto, precioConDescuento });
    setProducto({
      id: "",
      descripcion: "",
      precioUnitario: "",
      descuento: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-grid">
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={producto.id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Precio Unitario:</label>
          <input
            type="number"
            name="precioUnitario"
            value={producto.precioUnitario}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Descuento (%):</label>
          <input
            type="number"
            name="descuento"
            value={producto.descuento}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-agregar">
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
