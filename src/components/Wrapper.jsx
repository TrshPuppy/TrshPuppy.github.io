import SiteMenu from "./SiteMenu.jsx";

const Wrapper = ({View}) => {
    return (
        <>
            <SiteMenu />
            <main>
                <View/>
            </main>
        </>
    )
}

export default Wrapper;