import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { useSearchParams } from "react-router-dom";

import styles from '../../HeaderStyles.module.css';

export function AdminPanelMoviesHeader() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        search: '',
        criteria: 'id'
    });

    function searchClickHandler(e) {
        e.preventDefault();
        setSearchParams(`?${formData.criteria}=${formData.search}`);
    }

    function changeHandler(e) {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function clearSearch() {
        setFormData(state => ({ ...state, search: '' }));

        setSearchParams('');
    }
    
    return (
        <form className={styles["search-form"]}>
            <h2>
                <span>Movies</span>
            </h2>

            <div className={styles["search-input-container"]}>

                <input type="text" placeholder="Please, select the search criteria" name="search" value={formData.search} onChange={changeHandler} />
                {searchParams.toString() && !searchParams.has('page') &&
                    <button className={`${styles["btn"]} ${styles["close-btn"]}`} onClick={clearSearch}>
                        <AiOutlineClose size={15} />
                    </button>
                }
                <button className={styles["btn"]} onClick={searchClickHandler}>
                    <GoSearch size={20} />
                </button>
            </div>

            <div className={styles["filter"]}>
                <span>Search Criteria:</span>
                <select name="criteria" className={styles["criteria"]} onChange={changeHandler} value={formData.criteria}>
                    <option value="id">Id</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="movieCreatorId">Movie Creator Id</option>
                </select>
            </div>
        </form>
    );
}