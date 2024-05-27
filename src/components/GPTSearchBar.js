import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
    const prefferedLang = useSelector((store) => store.config.prefferedLang);

    return (
        <div className='pt-[12%] flex justify-center'>
            <form className=' bg-black bg-opacity-80 w-1/2 grid grid-cols-12'>
                <input
                    className='m-4 p-4 col-span-9'
                    type='text'
                    placeholder={lang[prefferedLang].gptSearchPlaceholder}
                />
                <button
                    className='py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg'
                >
                    {lang[prefferedLang].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar