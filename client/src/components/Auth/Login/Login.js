import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

import '../Auth.css';
import styles from '../Auth.module.css';

import * as authService from '../../../services/authService';
import UserContext from '../../../contexts/UserContext';
import { Spinner } from '../../Spinner/Spinner';

export function Login({ closeModalHandler }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { updateUser } = useContext(UserContext);

    if(isLoading) return <Spinner />

    function closeHandler(e) {
        e.preventDefault();

        if (e.target.className !== 'login-area') return;
        closeModalHandler('login');
    }

    function loginClickHandler() {
        setIsLoading(true);
        authService.login(formData)
            .then(data => {
                setIsLoading(false);
                updateUser(data);
                toast.success('You successfully logged in!');
                closeModalHandler('login');

            })
            .catch(err => {
                setIsLoading(false);
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