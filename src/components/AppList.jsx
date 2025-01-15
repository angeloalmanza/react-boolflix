import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "./AppCard";
import GenresFilter from "./GenresFilter";

const AppList = () => {
    const { movies, serieTv } = useContext(GlobalContext);
    const [selectedGenre, setSelectedGenre] = useState("all");

    // Filtra i contenuti basandosi sul genere selezionato
    const filteredMovies = movies.filter((movie) => {
        return selectedGenre === "all" || movie.genre_ids.includes(parseInt(selectedGenre));
    });

    const filteredSeries = serieTv.filter((serie) => {
        return selectedGenre === "all" || serie.genre_ids.includes(parseInt(selectedGenre));
    });

    return (
        <div>
            <GenresFilter
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />
            {filteredMovies.length === 0 && filteredSeries.length === 0 ? (
                <p>Nessun contenuto trovato. Prova a cercare qualcosa.</p>
            ) : (
                <>
                    {filteredMovies.length > 0 && (
                        <>
                            <h3>Film</h3>
                            <div className="card-grid">
                                {filteredMovies.map((movie) => (
                                    <AppCard key={movie.id} curItem={movie} />
                                ))}
                            </div>
                        </>
                    )}

                    {filteredSeries.length > 0 && (
                        <>
                            <h3>Serie TV</h3>
                            <div className="card-grid">
                                {filteredSeries.map((serie) => (
                                    <AppCard key={serie.id} curItem={serie} />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default AppList;
