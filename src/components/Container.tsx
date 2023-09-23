import PlayListContainer from "./PlaylistsContainer"
import SearchBar from "./SearchBar"


const Container = () => {
    return (
        <div class='flex flex-col items-center h-screen w-[800px] mx-auto bg-black'>
            <SearchBar />
            <PlayListContainer />
        </div>
    )
}

export default Container