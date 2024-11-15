import './App.css';
import Astros from './Components/Astros/Astros.jsx';
import Navbar from './Components/Mynavbar/MyNavbar.jsx';
import About from './components/about.jsx';
import Home from './components/Home.jsx';
import Apod from './Components/Apod/Apod.jsx';
// Importación de componentes necesarios
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Herramientas para la gestión de rutas


// Componente principal de la aplicación
function App() { 
    // Definición de los enlaces que se mostrarán en la barra de navegación
    const links = [
        {href: "/Navbar", text: "Navbar"},
        {href: "/Home", text: "Home"},
        {href: "/Astros", text: "Astros"},
        {href: "/Apod", text: "Apod"},
        {href: "/About", text: "About"}
      ];

      return (
        <>
            <Navbar links = {links} />
          <BrowserRouter>
              <Routes>
              <Route element = {<Astros />} path='/Astros'/>
              <Route element = {<About />} path='/About' />
              <Route element = {<Home />} path="/" />
              <Route element = {<Apod />} path='/Apod' />
              </Routes>
          </BrowserRouter>
        </>
      )
    } 

// Exporta el componente para ser usado en otros archivos
export default App; 

