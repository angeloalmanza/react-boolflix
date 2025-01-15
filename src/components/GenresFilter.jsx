import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const GenresFilter = ({ selectedGenre, setSelectedGenre, isMovie }) => {
    const { genres } = useContext(GlobalContext);
    const availableGenres = isMovie ? genres.movieGenres : genres.tvGenres;

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div className="genres-filter">
            <label htmlFor="genre">Filtra per Genere:</label>
            <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                <option value="">Tutti i Generi</option>
                {availableGenres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenresFilter;