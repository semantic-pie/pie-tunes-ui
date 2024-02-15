import { PlayerIcon } from "../icons/PlayerIcon"
import { LibraryIcon } from "../icons/LibraryIcon"
import { SearchIcon } from "../icons/SearchIcon"

import { SidePillBox } from "./SidePillBox"

const SidePill = () => {
    return (

        <div class="flex justify-center items-center  h-screen w-60 px-5 py-6 gap-16">
            <div class="flex flex-col gap-5 rounded-full dark-blur p-5 ">
                <SidePillBox >
                    <PlayerIcon class="w-8 h-8 fill-white" />
                </SidePillBox>
                <SidePillBox >
                    <LibraryIcon class="w-8 h-8 fill-white" />
                </SidePillBox >
                <SidePillBox >
                    <SearchIcon class="w-8 h-8 fill-white" />
                </SidePillBox >
            </div>
        </div>

    )
}
export default SidePill
