import { useState, useCallback, useEffect, useMemo } from "react";

import "./App.css";

import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";
import SearchBar from "./components/Searchbar.jsx";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("Lista de productos actualizada:", productos);
  }, [productos]); //Se ejecuta cada vez que la lista cambia

  const [searchTerm, setSearchTerm] = useState("");

  const productosFiltrados = useMemo(() => {
    if (!searchTerm.trim()) return productos;

    return productos.filter(
      (producto) =>
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.id.includes(searchTerm)
    );
  }, [productos, searchTerm]);

  const buscarProducto = useCallback((termino) => {
    console.log("Valor ingresado en barra de búsqueda:", termino);
    setSearchTerm(termino.trim());
  }, []);

  const editarProducto = useCallback((id, datosActualizados) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id ? { ...producto, ...datosActualizados } : producto
      )
    );
  }, []);

  const eliminarProducto = useCallback((id) => {
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== id)
    );
  }, []);

  return (
    <>
      <div>
        <h1>Lista de Productos</h1>
        <SearchBar searchTerm={searchTerm} onSearch={buscarProducto} />
        <ProductForm
          onAddProducto={(nuevoProducto) => {
            setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
          }}
        />
        <ProductList
          productos={productosFiltrados}
          onEditProducto={editarProducto}
          onDeleteProducto={eliminarProducto}
        />
      </div>
    </>
  );
}

export default App;
