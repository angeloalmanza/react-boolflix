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
          <FontAwesomeIcon key={`full-${index}`} icon={faStarFull} className="full-star"/>
        ))}
        {emptyStars.map((_, index) => (
          <FontAwesomeIcon key={`empty-${index}`} icon={faStarEmpty} className="empty-star"/>
        ))}
      </>
    )
  }

  const globalProvideValue = {
    searchValue,
    setSearchValue,
    movies,
    serieTv,
    getMovies,
    imgUrl,
    renderStars
  };


  return (
    <GlobalContext.Provider value={globalProvideValue}>
      <AppLayout />
    </GlobalContext.Provider>
  )
}

export default App
