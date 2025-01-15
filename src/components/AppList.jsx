import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import AppCard from "./AppCard";

const AppList = () => {
    const { movies, serieTv } = useContext(GlobalContext);

    return (
        <div>
            {movies.length === 0 && serieTv.length === 0 ? (
                <p>Nessun contenuto trovato. Prova a cercare qualcosa.</p>
            ) : (
                <>
                    {movies.length > 0 && (
                        <>
                            <h3>Film</h3>
                            <div className="card-grid">
                                {movies.map((movie) => (
                                    <AppCard key={movie.id} curItem={movie} />
                                ))}
                            </div>
                        </>
                    )}

                    {serieTv.length > 0 && (
                        <>
                            <h3>Serie TV</h3>
                            <div className="card-grid">
                                {serieTv.map((serie) => (
                                    <AppCard key={serie.id} curItem={serie} />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default AppList;