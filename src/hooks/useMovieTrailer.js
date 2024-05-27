import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    //fetch videos from TMDB video API
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const allTrailer = json.results.filter((video) => video.type === "Trailer");
        const trailer = allTrailer.length ? allTrailer[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;