import React from 'react'

const GetCard = (props) => {
    return (
        <div className=' p-8 md:p-12 border-2 border-white rounded-3xl flex flex-col gap-10'>
            <div className='flex justify-center items-center p-2 border-2 rounded-full h-12 w-12'>
                <div className=' flex scale-150'>
                    {props.icon}
                </div>
            </div>
            <div className=' flex flex-col gap-2'>
                <h1 className=' font-bold'>{props.title}</h1>
                <p className=' text-gray-300 md:w-[70%]'>{props.description}</p>
            </div>
        </div>
    )
}

export default GetCard
