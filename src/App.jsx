import { Inicio } from "./pages/Inicio";
import { Somos } from "./pages/Somos";
import { Contacto } from "./pages/Contacto";
import { Entradas } from "./pages/Entradas";
import {Candy} from "./pages/Candy";
import { DetallePelicula } from "./pages/DetallePelicula";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";

function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/somos" element={<Somos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/entradas/:peliculaId" element={<Entradas/>}/>
          <Route path="/candy" element={<Candy/>}/>
          <Route path="/pelicula/:peliculaId" element={<DetallePelicula/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
