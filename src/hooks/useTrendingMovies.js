import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/movieSlice';


const useTrendingMovies = () => {
    //Fetch data from TMDB API and add to store.
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        getTrendingMovies();
    }, []);
};

export default useTrendingMovies;