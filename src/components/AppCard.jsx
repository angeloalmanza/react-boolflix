import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const AppCard = ({ curItem }) => {
    const { imgUrl, renderStars } = useContext(GlobalContext);
    const placeholderImage = "https://placehold.co/300x400";

    const languageFlags = {
        en: "img/en.png",
        it: "img/it.png"
    }

    return (
        <div className="card">
            <img src={curItem.poster_path ? `${imgUrl}${curItem.poster_path}` : placeholderImage} alt="" />
            <div className="card-overlay">
                <div className="card-content">
                    <h3 className="mb-5">{curItem.title || curItem.name}</h3>
                    <p className="mb-5"><strong>Titolo originale:</strong> {curItem.original_title || curItem.original_name}</p>
                    <p className="mb-5">
                        <strong>Lingua originale: </strong>
                        <img src={languageFlags[curItem.original_language] || "img/placeholder.png"} alt=""/>
                    </p>
                    <p className="mb-5"><strong>Voto:</strong> {renderStars(curItem.vote_average)}</p>
                    <p className="mb-5 card-overview"><strong>Overview:</strong> {curItem.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default AppCard;