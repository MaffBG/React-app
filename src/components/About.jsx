import "./about.css";
import myImage from './myphoto.png';

function About() {

    const socialMedia = [

        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/mballesterosmx/",
            icon: "",
        },
        {
            name: "Github",
            url: "https://github.com/MaffBG/",
            icon: "",
        },

    ];

    return (

        <>
            <div className="title">
                <h1>Acerca de mi</h1>
                <p>Mafer</p>
            </div>

            <div className="profile">

                <img src={myImage} alt="myphoto" className="profile-img" />
                <p className="profile-description">Soy una estudiante de Mercadotecnia Internacional con gran pasión por la innovación digital. Actualmente, estoy ampliando mis conocimientos en Java en GENERATION y complementando mi formación con el curso de Marketing Digital y E-commerce de Google. Mi objetivo es convertirme en una desarrolladora full-stack integral capaz de crear soluciones web que sean tanto funcionales como atractivas.</p>

            </div>

            <div className="container-network">

                {
                    socialMedia.map((netkwork, idx) => (
                        <socialMedia name={netkwork.name} url={netkwork.url} key={idx} />

                    ))
                }

            </div>
        </>

    );
}

function socialMedia(network) {

    return (

        <a href={network.url} className="network">
            {network.name}
        </a>


    )
}

export default About;