import { useState, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from '../Auth.module.css';

import * as authService from '../../../services/authService';
import UserContext from '../../../contexts/UserContext';

export function Login({ closeModalHandler }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const { updateUser } = useContext(UserContext);

    function closeHandler(e) {
        e.preventDefault();

        if (e.target.className !== 'login-area') return;
        closeModalHandler('login');
    }

    function loginClickHandler() {
        authService.login(formData)
            .then(data => {
                updateUser(data);
                closeModalHandler('login');

            })
            .catch(err => {
                setError(err.message);
                setFormData(state => ({ ...state, password: '' }))
            });
    }

    function changeHandler(e) {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return (
        <div className="login-area" onClick={closeHandler}>
            <div className="login-box">
                <button onClick={closeModalHandler.bind(null, 'login')}><AiOutlineClose /></button>
                <h2>LOGIN</h2>
                <form method="POST">
                    <h6>Username:</h6>
                    <input name="username" type="text" value={formData.username} onChange={changeHandler} />
                    <h6>Password:</h6>
                    <input name="password" type="password" value={formData.password} onChange={changeHandler} />
                    <button className="theme-btn auth-button" onClick={loginClickHandler} disabled={Object.values(formData).includes('')}>LOG IN</button>
                    {error && <p className={styles['error-message']}>❌{error}</p>}
                </form>
            </div>
        </div>
    );
}