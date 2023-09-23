import { SearchIcon } from "./icons/SearchIcon"

const SearchBar = () => {
    return (
        <div class="w-[790px] mt-5 flex flex-row h-12 items-center">
            <SearchIcon />
            <input type="text" class="py-3 px-5 block w-full rounded-lg text-sm focus:border-transparent focus:ring-transparent dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Input text" />
        </div>
    )
}

export default SearchBar;