import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'

import UserContext from '../../contexts/UserContext';

import { Home } from "../Home/Home";
import { MovieDetails } from "../MovieDetails/MovieDetails";
import { Movies } from "../Movies/Movies";
import { NotFound } from "../static/NotFound/NotFound";
import { PrivacyPolicy } from '../static/PrivacyPolicy/PrivacyPolicy';
import { ServerError } from "../static/ServerError/ServerError";
import { TermsOfService } from '../static/TermsOfService/TermsOfService';
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
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

            {isAuth
                ? userRoutes
                : guestRoutes
            }

            <Route path="/500" element={<ServerError />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
}