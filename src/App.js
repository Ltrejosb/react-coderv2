import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se añadieron ${cantidad} de items al carrito`);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<h1>Estoy en el carrito</h1>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>ERROR 404: NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
