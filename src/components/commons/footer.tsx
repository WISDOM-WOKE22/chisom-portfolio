import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex flex-row items-center justify-center mb-10">
            <div className="flex items-center justify-center w-full max-w-[1600px] border-t-1 pt-10">
                <div className="flex justify-between items-center flex-row w-full">
                    <div className="flex flex-col text-md">
                        <Link href="/">
                            <h1>LINKEDIN</h1>
                        </Link>
                        <Link href="/">
                            <h1>GITHUB</h1>
                        </Link>
                        <Link href="/">
                            <h1>X (twitter)</h1>
                        </Link>
                        <Link href="/">
                            <h1>DEV-TO</h1>
                        </Link>
                    </div>

                    <div className="w-full max-w-[250px]">
                        <p>LET'S CONNECT AND CONQUER YOUR WORLD TOGETHER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}