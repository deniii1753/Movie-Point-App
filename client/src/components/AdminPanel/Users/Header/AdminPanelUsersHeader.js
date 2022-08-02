import { GoSearch } from 'react-icons/go';
import styles from '../../HeaderStyles.module.css';

export function AdminPanelUsersHeader() {
    return (
        <form className={styles["search-form"]}>
            <h2>
                <span>Users</span>
            </h2>

            <div className={styles["search-input-container"]}>

                <input type="text" placeholder="Please, select the search criteria" name="search" />
                <button className={styles["btn"]}>
                    <GoSearch size={20} />
                </button>
            </div>

            <div className={styles["filter"]}>
                <span>Search Criteria:</span>
                <select name="criteria" className={styles["criteria"]} defaultValue="">
                    <option defaultValue="">Id</option>
                    <option defaultValue="">Username</option>
                    <option defaultValue="">Email</option>
                    <option defaultValue="">First Name</option>
                    <option defaultValue="">Last Name</option>
                </select>
            </div>
        </form>
    );
}