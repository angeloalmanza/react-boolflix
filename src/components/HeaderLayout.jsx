import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const HeaderLayout = () => {
    const { searchValue, setSearchValue, getMovies } = useContext(GlobalContext);

    return (
        <>
            <section className="header">
                <div>
                    <h1>BOOLFLIX</h1>
                </div>
                <div>
                    <input type="search" value={searchValue} placeholder="cerca un film" onChange={(event) => setSearchValue(event.target.value)} />
                    <button onClick={getMovies}>Cerca</button>
                </div>
            </section>

        </>
    )
}

export default HeaderLayout;