import { Route } from "react-router-dom";

import { MovieCreate } from "../MovieCreate/MovieCreate";
import { MovieEdit } from "../MovieEdit/MovieEdit";
import { Profile } from "../Profile/Profile";

export const userRoutes = (
    <>
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies/:movieId/edit" element={<MovieEdit />} />
    </>
)