import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

const MoviesList = () => {
    const {movies} = useContext(GlobalContext);

    const languageFlags = {
        en: "img/en.png",
        it: "img/it.png"
    }

    return(
        <div>
            {movies.length === 0 ? (
                <p>Nessun film trovato. Prova a cercare qualcosa</p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p><strong>Titolo originale:</strong> {movie.original_title}</p>
                            <p>
                                <strong>Lingua originale:</strong> 
                                <img src={languageFlags[movie.original_language] || "img/placeholder.png"} alt="" width="20"/>
                            </p>
                            <p><strong>Voto:</strong> {movie.vote_average}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MoviesList;