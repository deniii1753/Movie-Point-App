import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

export function UserLinks({ activeClassName }) {
    const { user } = useContext(UserContext);

    return (
        <>
            <li><NavLink to="/movies/create" className={activeClassName}>Add Movie</NavLink></li>
            <li><NavLink to="/profile" className={activeClassName}>Profile</NavLink></li>
            {user.role === 'admin' &&
                <li><NavLink to="/adminPanel" >Admin Panel</NavLink></li>
            }
            <li><NavLink to="/logout" className={activeClassName}>Logout</NavLink></li>
        </>
    )
}