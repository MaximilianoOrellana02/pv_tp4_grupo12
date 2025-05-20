import { useState, useCallback } from "react";

import "./App.css";

import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = useCallback((nuevoProducto) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  }, []);

  const editarProducto = useCallback((id, datosActualizados) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id ? { ...producto, ...datosActualizados } : producto
      )
    );
  }, []);

 const eliminarProducto = useCallback((id) => {
    setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id)
    );
  }, []);

  return (
    <>
      <div>
        <h1>Lista de Productos</h1>
        <ProductForm onAddProducto={agregarProducto} />
        <ProductList productos={productos} onEditProducto={editarProducto}
        onDeleteProducto={eliminarProducto} />
      </div>
    </>
  );
}

export default App;
