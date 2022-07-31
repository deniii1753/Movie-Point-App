import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import './Header.css';

import { UserLinks } from './UserLinks';
import { GuestLinks } from './GuestLinks';
import { useContext } from 'react';
import { Search } from './Search/Search';

export function Header() {
    const { user } = useContext(UserContext);
    const activeClassName = ({ isActive }) => isActive ? 'active' : undefined;

    return (
        <header className="header">
            <div className="container">
                <div className="header-area">
                    <div className="logo">
                        <NavLink to="/"><img src="/img/logo.png" alt="logo" /></NavLink>
                    </div>
                    <div className="header-right mainnav">
                        <Search />
                        <ul>

                            {user && <li>Welcome {user.username}!</li>}
                            <li><NavLink to="/" className={activeClassName}>Home</NavLink></li>
                            <li><NavLink to="/movies" className={activeClassName} end>Movies</NavLink></li>
                            {user
                                ? <UserLinks activeClassName={activeClassName} />
                                : <GuestLinks />
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}