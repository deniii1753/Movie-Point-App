import { NavLink } from 'react-router-dom';

export function UserLinks({activeClassName}) {
    return (
        <>
            <li><NavLink to="/movies/create" className={activeClassName}>Add Movie</NavLink></li>
            <li><NavLink to="/profile" className={activeClassName}>Profile</NavLink></li>
            <li><NavLink to="/logout" className={activeClassName}>Logout</NavLink></li>
        </>
    )
}