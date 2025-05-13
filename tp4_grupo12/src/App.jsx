import { useState } from "react";

import "./App.css";

import ProductList from "./components/ProductList.jsx";

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      descripcion: "Calculadora",
      precioUnitario: 20000,
      descuento: 10,
      precioConDescuento: 20000 - (20000 * 10) / 100,
      stock: 50,
    },
  ]);

  return (
    <>
      <div>
        <ProductList productos={productos} />
      </div>
    </>
  );
}

export default App;
