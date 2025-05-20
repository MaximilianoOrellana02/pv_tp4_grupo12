import React from "react";

import ProductItem from "./ProductItem.jsx";

const ProductList = ({ productos, onEditProducto, onDeleteProducto }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Descuento</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
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
          {productos.length === 0 && (<tr><td colSpan={6} style={{textAlign: 'center', color: 'grey'}}><Alert className="inline-block"/> No hay productos en la lista.</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
