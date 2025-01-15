import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const AppCard = ({ curItem }) => {
    const { imgUrl, renderStars, getDetails } = useContext(GlobalContext);
    const placeholderImage = "https://placehold.co/300x400";

    const languageFlags = {
        en: "img/en.png",
        it: "img/it.png"
    }

    const [details, setDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchDetails = () => {
        const type = curItem.title ? "movie" : "tv";
        setLoading(true);
        getDetails(curItem.id, type)
            .then((data) => {
                setDetails(data);
            })
            .catch((error) => {
                console.error("Errore durante il fetch dei dettagli:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
        if (!details && !loading) {
            fetchDetails();
        }
    };

    return (
        <div className="card">
            <img src={curItem.poster_path ? `${imgUrl}${curItem.poster_path}` : placeholderImage} alt="" />
            <div className="card-overlay">
                <div className="card-content">
                    <h3 className="mb-5">{curItem.title || curItem.name}</h3>
                    <p className="mb-5"><strong>Titolo originale:</strong> {curItem.original_title || curItem.original_name}</p>
                    <p className="mb-5">
                        <strong>Lingua originale: </strong>
                        <img src={languageFlags[curItem.original_language] || "img/placeholder.png"} alt="" />
                    </p>
                    <p className="mb-5"><strong>Voto:</strong> {renderStars(curItem.vote_average)}</p>
                    <p className="mb-5 card-overview"><strong>Overview:</strong> {curItem.overview}</p>
                    <button onClick={toggleDetails}>
                        {showDetails ? "Nascondi Dettagli" : "Mostra Dettagli"}
                    </button>
                    {showDetails && (
                        <>
                            {loading ? (
                                <p>Caricamento dettagli...</p>
                            ) : (
                                details && (
                                    <>
                                        <p className="mb-5"><strong>Generi:</strong> {details.genres.join(", ")}</p>
                                        <p className="mb-5"><strong>Cast:</strong> {details.cast.map((actor) => actor.name).join(", ")}</p>
                                    </>
                                )
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AppCard;