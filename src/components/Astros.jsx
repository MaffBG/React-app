// Importación de hooks y librerías necesarias
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material"; // Indicador de carga circular de Material-UI
import "./Astros.css"; // Archivo de estilos específicos para el componente Astros

// Componente funcional para mostrar información de cada astronauta
function AstroCard({ name, craft }) {
    return (
        <div className="astro-card">
            {/* Muestra el nombre del astronauta */}
            <p className="astro">
                El Astronauta "<span className="astro-name">{name}</span>"
            </p>

            {/* Muestra la estación espacial en la que se encuentra */}
            <p className="craft">
                Está en la estación espacial "<span className="craft-name">{craft}</span>"
            </p>
        </div>
    );
}

// Componente funcional principal que lista astronautas
function Astros() {
    const API_URL = "http://api.open-notify.org/astros.json"; // URL de la API

    const [astros, setAstros] = useState(null); // Estado para almacenar los astronautas

    useEffect(() => {
        // Función asincrónica para obtener los datos de la API
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL); // Realiza la solicitud a la API
                const data = await response.json(); // Convierte la respuesta a JSON
                setAstros(data.people); // Actualiza el estado con los datos de los astronautas
            } catch (error) {
                console.error(error); // Maneja errores en la solicitud
            }
        };

        fetchData(); // Llama a la función para obtener los datos
    }, []); // El efecto se ejecuta solo al montar el componente

    return (
        <div className="astros-container">
            {/* Si los datos aún no están cargados, muestra un indicador de carga */}
            {!astros ? (
                <CircularProgress sx={{ color: "beige" }} /> // Indicador de carga con estilo personalizado
            ) : (
                // Renderiza un componente AstroCard para cada astronauta
                astros.map((astro, idx) => <AstroCard key={idx} {...astro} />)
            )}
        </div>
    );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Astros;
