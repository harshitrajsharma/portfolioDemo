export default function Intro() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col gap-4 text-center md:text-left">

            <p className="text-base text-gray-400">INTRO</p>

            <div className="flex flex-col gap-4 lg:flex-row justify-center">
                <div className=" w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="w-full lg:w-2/3 flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Solving complex problems with design.</h1>
                    </div>

                </div>

                <div className=" w-full lg:w-1/2 flex justify-end">
                    <div className="w-full" >
                        <p>A designer's goal is not to make beautiful graphics, but to provide a soloution to complex business problems. I optimize brands' aesthetics to their target audience to make their products or service more desirable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}