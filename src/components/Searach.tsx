import { SearchIcon } from './icons/SearchIcon'

const Search = () => {
  return (
    <div class="w-full flex flex-row px-5 h-12 items-center bg-dark rounded-xl">
      <SearchIcon />
      <input
        type="text"
        class="pl-3 w-full font-light bg-dark outline-none"
        placeholder="Search music, artist, albums..."
      />
    </div>
  )
}

export default Search
