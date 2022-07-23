import { Route } from "react-router-dom";

import { Navigate } from 'react-router-dom';

export const guestRoutes = (
    <>
        <Route path="/movies/create" element={<Navigate to={"/"} replace />} />
        <Route path="/profile" element={<Navigate to={"/"} replace />} />
        <Route path="/movies/:movieId/edit" element={<Navigate to={"/"} replace />} />
    </>
);