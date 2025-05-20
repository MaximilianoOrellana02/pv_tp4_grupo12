import React from "react";
import ProductItem from "./ProductItem.jsx";
// No importamos Alert porque no lo vamos a usar directamente aquí.
// Si en el futuro quieres usar un ícono, deberás instalar lucide-react y descomentar la línea.

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
            <th>Acciones</th> {/* Asegúrate de tener esta columna para los botones */}
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
          {/* Mensaje si no hay productos en la lista */}
          {productos.length === 0 && (
            <tr>
              {/* ColSpan debe coincidir con el número total de columnas en tu tabla */}
              <td colSpan={7} style={{ textAlign: 'center', color: 'grey' }}>
                {/* Aquí solo texto, sin el componente Alert */}
                No hay productos en la lista.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
