import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="BIENVENIDOS A FIXBIKE" />
    </div>
  );
}

export default App;
