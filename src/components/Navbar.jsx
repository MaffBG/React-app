import { Link } from "react-router-dom";
// Importa los estilos CSS específicos para este componente
import "./Navbar.css";

// Componente funcional para un botón de navegación
function NavButton(props) {
    return (
        <Link className="nav-btn" to={props.href}>{props.text}</Link>
    );
}

// Componente funcional para la barra de navegación
function Navbar({ links }) {
    // Loguea los enlaces pasados como props para verificar su contenido durante el desarrollo
    console.log(links);

    // Define un título para la barra de navegación
    const title = "Space-app"; // Este valor no se utiliza en el JSX, pero se podría usar para dinámicamente cambiar el título más adelante.

    // Estilos en línea para el encabezado (nombre de la barra de navegación)
    //const headerStyles = { 
    //  fontSize: "2.5rem", // Tamaño grande del texto
    //margin: "2px", // Margen pequeño
    //background: "-webkit-linear-gradient(#024caa, #c83050)", // Degradado para el texto
    //WebkitBackgroundClip: "text", // Solo aplica el fondo al texto
    //WebkitTextFillColor: "transparent", // Hace que el fondo del texto sea visible al quitar el color de relleno
    // }; 

    return (
        // Elemento nav con estilo para fijarlo en la parte superior de la pantalla
        <nav>
            <div>
                {/* Encabezado de la barra de navegación con los estilos definidos */}
                <h1>{title}</h1>
            </div>
            <div>
                {/* Mapeo de los enlaces pasados como props para renderizar botones */}
                {links.map((link, idx) => (
                    // Renderiza el componente NavButton para cada enlace
                    <NavButton href={link.href} text={link.text} key={idx} />
                ))}
            </div>
        </nav>
    );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Navbar; 
