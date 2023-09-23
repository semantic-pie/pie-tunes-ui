import { AlbumsIcon } from "./icons/AlbumsIcons"
import { DiscoverIcon } from "./icons/DiscoverIcon"
import { ExploreIcon } from "./icons/ExploreIcon"
import { RadioIcon } from "./icons/RadioIcon"

const SideBar = () => {
  return (
    <div class="absolute bg-[#212121] h-screen w-72 left-0">
      <div class="flex flex-col">
        <div class="w-full h-36 py-9 flex items-center">
          <span class="text-white font-normal not-italic text-2xl ml-8">
            Pie Tunes
          </span>
        </div>

        <div class="flex flex-col">
          <div class="py-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div class="flex ml-8 items-center space-x-2 ">
              <ExploreIcon />
              <p>Explore</p>
            </div>
          </div>
          <div class="py-4 fle">
            <span class="ml-8 flex items-center  space-x-2">
              <DiscoverIcon />
              <p>Discover</p>
            </span>
          </div>
          <div class="py-4">
            <span class="ml-8 flex items-center  space-x-2">
              <RadioIcon />
              <p>Radio</p>
            </span>
          </div>
          <div class="py-4">
            <span class="ml-8 flex items-center  space-x-2">
              <AlbumsIcon />
              <p>Albums</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;