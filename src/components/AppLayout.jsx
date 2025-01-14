import HeaderLayout from "./HeaderLayout";
import MoviesList from "./MoviesList";
import SerieTvList from "./SerieTvList";

const AppLayout = () => {

    return (
        <>
            <header>
                <HeaderLayout />
            </header>

            <main>
                <MoviesList />
                <SerieTvList />
            </main>
        </>
    )
}

export default AppLayout;