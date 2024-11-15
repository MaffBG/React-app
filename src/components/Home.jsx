import "./Home.css";
import image from "./";

function Home() {

    const contentHome = {
        description: "Space-app es un sitio web interactivo y educativo que ofrece información en tiempo real sobre los astronautas que se encuentran en el espacio y una galería de impresionantes imágenes proporcionadas por la NASA. A través de esta plataforma, los usuarios pueden acceder a una variedad de recursos y datos espaciales actualizados, centrados principalmente en la exploración humana y la observación del espacio.",
        imageAlt: "Placeholder image"
    };

    return (

        <div className="Container-home">

            <img src={image} alt={contentHome.imageAlt} className="img-home"></img>
            <p className="home-description">{contentHome.description}</p>

        </div>
    )
}

export default Home;