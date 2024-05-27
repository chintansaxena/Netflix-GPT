import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GPTSearch = () => {
    return (
        <div>
            <div className='absolute brightness-50 -z-10'>
                <img
                    alt='background_image'
                    src={BG_IMG_URL}
                />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch