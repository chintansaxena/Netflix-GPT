import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingSeries } from '../utils/movieSlice';

const useTrendingSeries = () => {
    //Fetch data from TMDB API and add to store.
    const dispatch = useDispatch();

    const getTrendingSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTrendingSeries(json.results));
    }

    useEffect(() => {
        getTrendingSeries();
    }, []);
};

export default useTrendingSeries;