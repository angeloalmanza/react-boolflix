import HeaderLayout from "./HeaderLayout";
import AppList from "./AppList";

const AppLayout = () => {

    return (
        <>
            <header>
                <HeaderLayout />
            </header>

            <main>
                <AppList />
            </main>

        </>
    )
}

export default AppLayout;