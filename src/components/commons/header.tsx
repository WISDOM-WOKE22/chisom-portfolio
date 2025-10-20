import { ModeToggle } from "../theme/theme-toggle"

export const Header = () => {
    return (
        <div
            className="h-20 px-3 lg:px-6 xl:px-10 w-full fixed left-0 right-0 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex items-center justify-center flex-row z-20"
        >
            <div className="flex items-center justify-between w-full max-w-[1800px]">
                <h1>Chisom-Kanu</h1>

                <div className="flex items-center justify-between gap-4">
                    <p className="cursor-pointer">Contact</p>
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">Projects</p>
                </div>
                {/* <ModeToggle/> */}
            </div>
        </div>
    )
}