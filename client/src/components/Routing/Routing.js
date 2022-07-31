import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'

import UserContext from '../../contexts/UserContext';

import { Home } from "../Home/Home";
import { MovieDetails } from "../MovieDetails/MovieDetails";
import { Movies } from "../Movies/Movies";
import { NotFound } from "../static/NotFound/NotFound";
import { ServerError } from "../static/ServerError/ServerError";
import { guestRoutes } from './guestRoutes';
import { userRoutes } from './userRoutes';

export function Routing() {
    const { user } = useContext(UserContext);
    const isAuth = Boolean(user);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />

            {isAuth
                ? userRoutes
                : guestRoutes
            }

            <Route path="/500" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}