import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

const SerieTvList = () => {
    const {serieTv, imgUrl, renderStars} = useContext(GlobalContext);

    const languageFlags = {
        en: "img/en.png",
        it: "img/it.png"
    }

    return (
        <div>
            {serieTv.length === 0 ? (
                <p>Nessuna serie Tv trovata. Prova a cercare qualcosa</p>
            ) : (
                <div>
                    <h3>Serie Tv</h3>
                    <ul>
                        {serieTv.map((serie) => (
                            <li key={serie.id}>
                                <img src={`${imgUrl}${serie.poster_path}`} alt="" />
                                <h3>{serie.name}</h3>
                                <p><strong>Titolo originale:</strong> {serie.original_name}</p>
                                <p>
                                    <strong>Lingua originale:</strong>
                                    <img src={languageFlags[serie.original_language] || "img/placeholder.png"} alt="" width="20" />
                                </p>
                                <p><strong>Voto:</strong> {renderStars(serie.vote_average)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SerieTvList;