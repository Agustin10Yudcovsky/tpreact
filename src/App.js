import './App.css';
import Boton from './components/Boton';
import Link from './components/Link';
import Presentacion from './Views/Presentacion';
import presentacion from './Views/Presentacion'
import Navbar from '../src/Views/Navbar'
import Informacion from '../src/Views/Informacion'
import Conocimientos from '../src/Views/Conocimientos'
import Educacion from '../src/Views/Educacion'


function App() {
  
  return (
    <div>
      <Navbar links = {["Acerca de mi ", "Conocimientos", "Educacion", "Contacto"]}/>
      <div className="presentacion">
        <Link class = "nombre" link = "#" texto = "Agustin Yudcovsky"/>
        <Presentacion/>
      </div>
      <Informacion/>
      <Conocimientos/>
      <Educacion/>
    </div>
    
  );
}

export default App;
