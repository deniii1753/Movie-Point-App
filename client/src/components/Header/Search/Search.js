import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import './Search.css';

export function Search() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    function searchClickHandler(e) {
        e.preventDefault();
        navigate(`/movies?search=${searchValue}`);
    }

    function changeSearchValue(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="header-search-container">
            <form method="POST">
                <input type="text" placeholder="Home Alone 2" value={searchValue} onChange={changeSearchValue} />
                <button onClick={searchClickHandler}><GoSearch size={22} /></button>
            </form>
        </div>
    );
}