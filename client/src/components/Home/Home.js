import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as movieService from '../../services/movieService';


import { HomeHeaderMovie } from './HomeHeader/HomeHeaderMovie';
import { HomeHeaderText } from './HomeHeader/HomeHeaderText';
import { HomeMovies } from './HomeMovies/HomeMovies';

import './Home.css';

export function Home() {
    const [topRatedMovie, setTopRatedMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getTopRated()
            .then(data => setTopRatedMovie(data[0]))
            .catch(err => {
                toast.error(err.message)
                navigate('/500');
            });

    }, [navigate]);
    return (
        <>
            {topRatedMovie
                ? <HomeHeaderMovie movie={topRatedMovie} />
                : <HomeHeaderText />}


            <HomeMovies />
        </>
    );
}