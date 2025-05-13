import React from "react";

const ProductList = ({ productos }) => {
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
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precioUnitario}</td>
                            <td>{producto.descuento} % </td>
                            <td>{producto.precioConDescuento}</td>
                            <td>{producto.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ProductList;
