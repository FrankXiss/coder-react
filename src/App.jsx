import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";

function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/catalogo/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/carrito" element={<Carrito />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;