import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-32 md:w-40 pr-2 cursor-pointer'>
            <img
                className='rounded-md'
                alt='poster'
                src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;