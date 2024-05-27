import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='py-6 w-1/3'>{overview}</p>
            <div>
                <button className='bg-white text-black rounded-sm px-10 py-2 m-2 hover:bg-opacity-80 text-lg font-bold'>
                    ➤ Play
                </button>
                <button className='bg-gray-400 text-white rounded-sm px-10 py-2 m-2 hover:bg-opacity-20 text-lg bg-opacity-40'>
                    🛈 More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle