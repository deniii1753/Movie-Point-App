import { Route } from 'react-router-dom';
import { AdminPanel } from '../AdminPanel/AdminPanel';
import { Logout } from '../Auth/Logout/Logout';

import { MovieCreate } from '../MovieCreate/MovieCreate';
import { MovieEdit } from '../MovieEdit/MovieEdit';
import { Profile } from '../Profile/Profile';
import { ProfileEdit } from '../ProfileEdit/ProfileEdit';
import { IsAdmin } from '../static/IsAdmin/IsAdmin';
import { AdminPanelUsers } from '../AdminPanel/Users/AdminPanelUsers';
import { AdminPanelGenres } from '../AdminPanel/Genres/AdminPanelGenres';

export const userRoutes = (
    <>
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/movies/:movieId/edit" element={<MovieEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<IsAdmin />}>
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/adminPanel/users" element={<AdminPanelUsers />} />
            <Route path="/adminPanel/genres" element={<AdminPanelGenres />} />
        </Route>

    </>
)