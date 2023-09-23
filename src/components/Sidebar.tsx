import { AlbumsIcon } from './icons/AlbumsIcons'
import { DiscoverIcon } from './icons/DiscoverIcon'
import { ExploreIcon } from './icons/ExploreIcon'
import { RadioIcon } from './icons/RadioIcon'

const sideBarRoutes = [
  { label: 'Explore', icon: <ExploreIcon /> },
  { label: 'Discover', icon: <DiscoverIcon /> },
  { label: 'Radio', icon: <RadioIcon /> },
  { label: 'Albums', icon: <AlbumsIcon /> },
]

const SideBar = () => {
  return (
    <div class="flex flex-col bg-dark h-screen w-60 px-5 py-6 gap-16">
      <div class="w-full flex items-center">
        <span class="text-2xl">
          Pie Tunes
        </span>
      </div>

      <div class="flex flex-col gap-2">
        {sideBarRoutes.map((route) => (
          <div class="flex items-center space-x-2 px-3 py-2">
            <div class="w-6">
              {route.icon}
            </div>
            <a href={'#'}>{route.label}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SideBar
