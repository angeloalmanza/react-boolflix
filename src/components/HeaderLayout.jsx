import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const HeaderLayout = () => {
    const { searchValue, setSearchValue, getMovies } = useContext(GlobalContext);

    return (
        <>
            <input type="search" value={searchValue} placeholder="cerca un film" onChange={(event) => setSearchValue(event.target.value)} />
            <button onClick={getMovies}>Cerca</button>
        </>
    )
}

export default HeaderLayout;