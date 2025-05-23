import React from "react";
import ProductItem from "./ProductItem";

import "./ProductList.css";

const ProductList = ({ productos, onEditProducto, onDeleteProducto }) => {
  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Descuento</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductItem
              key={producto.id}
              producto={producto}
              onEdit={onEditProducto}
              onDelete={onDeleteProducto}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
