import type { JSX } from "preact/jsx-runtime"


type Props = {
    children: string | JSX.Element | JSX.Element[]
  }
  

export const SidePillBox = ({children}: Props) => {
    return (
        <div class="flex justify-center items-center   hover:bg-opacity-25 hover:bg-white rounded-full w-14 h-14">
            {children}
        </div>
    )
}