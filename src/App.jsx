import axios from "axios"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react";
import AppLayout from "./components/AppLayout";

function App() {
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "fde89d56bf639f8a7048f76bb71abd47";

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

  const globalProvideValue = {
    searchValue,
    setSearchValue,
    movies,
    serieTv,
    getMovies
  };


  return (
    <GlobalContext.Provider value={globalProvideValue}>
      <AppLayout />
    </GlobalContext.Provider>
  )
}

export default App
