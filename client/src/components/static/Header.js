import { NavLink } from 'react-router-dom';

import { GoSearch } from 'react-icons/go';

export function Header() {
    const activeClassName = ({ isActive }) => isActive ? 'active' : undefined;

    return (
        <header className="header">
            <div className="container">
                <div className="header-area">
                    <div className="logo">
                        <NavLink to="/"><img src="/img/logo.png" alt="logo" /></NavLink>
                    </div>
                    <div className="header-right mainnav">
                        <form action="#">
                            <input type="text" placeholder="Home Alone 2" />
                            <button><GoSearch size={22}/></button>
                        </form>
                        <ul>
                            <li>Welcome Guest!</li>
                            <li><NavLink to="/" className={activeClassName}>Home</NavLink></li>
                            <li><NavLink to="/movies" className={activeClassName} end>Movies</NavLink></li>
                            <li><NavLink to="/movies/create" className={activeClassName}>Add Movie</NavLink></li>
                            <li><NavLink to="/profile" className={activeClassName}>Profile</NavLink></li>
                            <li><NavLink to="/login" className={activeClassName}>Login</NavLink></li>
                            <li><NavLink to="/register" className={activeClassName}>Register</NavLink></li>
                            <li><NavLink to="/logout" className={activeClassName}>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}