import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addOnAirTVseries } from '../utils/movieSlice';


const useOnAirTVseries = () => {
    //Fetch data from TMDB API and add to store.
    const dispatch = useDispatch();

    const getOnAirTVseries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated', API_OPTIONS);
        const json = await data.json();
        dispatch(addOnAirTVseries(json.results));
    }

    useEffect(() => {
        getOnAirTVseries();
    }, []);
};

export default useOnAirTVseries;