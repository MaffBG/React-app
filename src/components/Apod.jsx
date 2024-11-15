import { useEffect, useState } from "react";

function ApodCard ({apod}) {

    return(

        <div className="apod-card">

            <h2 className="apod-card-title">{apod.title}</h2>
            <p className="apod-card-date">{apod.date}</p>
            <img src={apod.hdurl} alt={apod.media_type} className="apod-card-img" />
            <p className="apod-card-description">{apod.explanation}</p>
            <p className="apod-card-copy">{apod.copyright}</p>
            
        </div>

    );
}

function Apod() {

    const api_url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [apod, setApod] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            const data = await (fetch(api_url));
            const res = await data.json();
            setApod(res);

        }

        fetchData().catch((err) => console.log(err));

    } , []);

    return (
        <div className="apod-container">

            {

                !apod ? ( <p> Loaging... </p>) : (<ApodCard key={apod.date} apod = {apod}/>)

            }

        

        </div>
    )


}

export default Apod;