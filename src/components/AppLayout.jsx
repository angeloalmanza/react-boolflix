import HeaderLayout from "./HeaderLayout";
import MoviesList from "./MoviesList";

const AppLayout = () => {

    return (
        <>
            <header>
                <HeaderLayout />
            </header>

            <main>
                <MoviesList />
            </main>
        </>
    )
}

export default AppLayout;