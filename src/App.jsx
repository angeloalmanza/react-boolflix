import axios from "axios"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react";
import AppLayout from "./components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

function App() {
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "fde89d56bf639f8a7048f76bb71abd47";
  const imgUrl = "https://image.tmdb.org/t/p/w342";

  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [serieTv, setSerieTv] = useState([]);

  const getMovies = (() => {
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue
      }
    }).then((resp) => {
      console.log(resp);
      setMovies(resp.data.results);
      getSerieTv();
    })
  })

  const getSerieTv = (() => {
    axios.get(`${apiUrl}/search/tv`, {
      params: {
        api_key: apiKey,
        query: searchValue
      }
    }).then((resp) => {
      console.log(resp);
      setSerieTv(resp.data.results);
    })
  })

  const renderStars = (vote) => {
    const starsCount = Math.ceil(vote / 2);
    const fullStars = Array(starsCount).fill(true);
    const emptyStars = Array(5 - starsCount).fill(false);

    return (
      <>
        {fullStars.map((_, index) => (
          <FontAwesomeIcon key={`full-${index}`} icon={faStarFull} className="full-star" />
        ))}
        {emptyStars.map((_, index) => (
          <FontAwesomeIcon key={`empty-${index}`} icon={faStarEmpty} className="empty-star" />
        ))}
      </>
    )
  }

  const getDetails = (id, type) => {
    const endpoint = `${apiUrl}/${type}/${id}`;
    const params = {
      api_key: apiKey,
      append_to_response: "credits"
    };

    return axios
      .get(endpoint, { params })
      .then((response) => {
        const data = response.data;

        const genres = data.genres ? data.genres.map((genre) => genre.name) : [];
        const cast = data.credits?.cast
          ? data.credits.cast.slice(0, 5).map((actor) => ({
            id: actor.id,
            name: actor.name,
          }))
          : [];

        return {
          genres,
          cast,
        };
      })
      .catch((error) => {
        console.error("Errore durante il fetch dei dettagli:", error);
        return {
          genres: [],
          cast: [],
        };
      });
  };

  const globalProvideValue = {
    searchValue,
    setSearchValue,
    movies,
    serieTv,
    getMovies,
    imgUrl,
    renderStars,
    getDetails
  };


  return (
    <GlobalContext.Provider value={globalProvideValue}>
      <AppLayout />
    </GlobalContext.Provider>
  )
}

export default App
