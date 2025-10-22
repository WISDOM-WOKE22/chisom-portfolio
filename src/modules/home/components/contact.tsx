import CalComponent from "./cal"

export const Contact = () => {
    return (
        <div className="px-5 lg:px-10">
            <div className="flex flex-row justify-center items-center">
                <h1 className="text-6xl">Let's Talk</h1>
            </div>

            <div className="mt-15">
                <CalComponent/>
            </div>

        </div>
    )
}