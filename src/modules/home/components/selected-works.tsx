import Image1 from "@/assets/image2.jpg"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const SelectedWorks = () => {
    return (
        <div className="px-3 lg:px-6 xl:px-14 mt-20">
            <h1 className="text-6xl font-bold">Selected Works</h1>

            <div className="mt-10 flex flex-row gap-15">  
                <div>
                    <Image src={Image1} className="w-[600px] h-[420px] border"
                    alt="image1"
                    width={600}
                    height={420}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
                <div>
                    <Image src={Image1} className="w-[1200px] h-[850px] border"
                    alt="image1"
                    width={800}
                    height={950}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
            </div>
            <div className="mt-60 flex flex-row-reverse gap-15">  
                <div>
                    <Image src={Image1} className="w-[600px] h-[420px] border"
                    alt="image1"
                    width={600}
                    height={420}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
                <div>
                    <Image src={Image1} className="w-[1200px] h-[850px] border"
                    alt="image1"
                    width={800}
                    height={950}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
            </div>
            <div className="mt-60 flex flex-row gap-15">  
                <div>
                    <Image src={Image1} className="w-[600px] h-[420px] border"
                    alt="image1"
                    width={600}
                    height={420}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
                <div>
                    <Image src={Image1} className="w-[1200px] h-[850px] border"
                    alt="image1"
                    width={800}
                    height={950}

                    />
                    <div className="mt-5">
                        <h1 className="text-4xl">This is my first Article</h1>
                        <h1 className="mt-2 text-gray-300">Published on 2025-10-20</h1>
                    </div>
                </div>
            </div>

            <div className="mt-60 flex flex-row justify-center items-center">
                <Button className="rounded-3xl text-md">SEE THEM ALL</Button>
            </div>
        </div>
    )
}