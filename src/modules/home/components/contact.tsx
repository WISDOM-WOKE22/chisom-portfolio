import CalComponent from "./cal"

export const Contact = () => {
    return (
        <div>
            <div className="flex flex-row justify-center items-center">
                <h1 className="text-6xl">Let's Talk</h1>
            </div>

            <div className="mt-15">
                <CalComponent/>
            </div>

        </div>
    )
}