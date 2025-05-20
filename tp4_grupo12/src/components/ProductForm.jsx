import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={producto.id}
        onChange={handleChange}
        required
      />

      <label>Descripción:</label>
      <input
        type="text"
        name="descripcion"
        value={producto.descripcion}
        onChange={handleChange}
        required
      />

      <label>Precio Unitario:</label>
      <input
        type="number"
        name="precioUnitario"
        value={producto.precioUnitario}
        onChange={handleChange}
        required
      />

      <label>Descuento (%):</label>
      <input
        type="number"
        name="descuento"
        value={producto.descuento}
        onChange={handleChange}
        required
      />

      <label>Stock:</label>
      <input
        type="number"
        name="stock"
        value={producto.stock}
        onChange={handleChange}
        required
      />

      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
