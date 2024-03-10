
export default function FeedbackCard(props) {
    return (
        <div className="bg-neutral-800 hover:bg-neutral-700 bg-opacity-75 backdrop-filter backdrop-blur-md text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-16 ">
            <p>"{props.review}"</p>
            <div className="flex gap-4">
                <div className="h-[60px] w-[60px] rounded-full"><img className=" object-contain rounded-full " src={props.image} /></div>
                <div className="flex flex-col justify-center gap-2 ">
                    <p className="text-lg font-bold">{props.name}</p>
                    <p className="text-base font-light text-gray-400">{props.details}</p>
                </div>
            </div>
        </div>
    )
}