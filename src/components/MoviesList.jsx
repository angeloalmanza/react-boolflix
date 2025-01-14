import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

const MoviesList = () => {
    const {movies} = useContext(GlobalContext);

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
                            <p><strong>Lingua originale:</strong> {movie.original_language}</p>
                            <p><strong>Voto:</strong> {movie.vote_average}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MoviesList;