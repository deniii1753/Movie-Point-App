import { NavLink } from 'react-router-dom';

import { GoSearch } from 'react-icons/go';
import { UserLinks } from './UserLinks';
import { GuestLinks } from './GuestLinks';

export function Header({user}) {
    
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
            
                            {user && <li>Welcome {user.username}!</li>}
                            <li><NavLink to="/" className={activeClassName}>Home</NavLink></li>
                            <li><NavLink to="/movies" className={activeClassName} end>Movies</NavLink></li>
                            {user
                                ? <UserLinks activeClassName={activeClassName}/>
                                : <GuestLinks />
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}