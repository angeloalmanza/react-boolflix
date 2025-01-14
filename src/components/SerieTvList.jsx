import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

const SerieTvList = () => {
    const { serieTv } = useContext(GlobalContext);

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
                                <h3>{serie.name}</h3>
                                <p><strong>Titolo originale:</strong> {serie.original_name}</p>
                                <p>
                                    <strong>Lingua originale:</strong>
                                    <img src={languageFlags[serie.original_language] || "img/placeholder.png"} alt="" width="20" />
                                </p>
                                <p><strong>Voto:</strong> {serie.vote_average}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SerieTvList;