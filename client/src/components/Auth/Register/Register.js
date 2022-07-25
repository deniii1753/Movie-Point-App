import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from '../Auth.module.css';

import * as authService from '../../../services/authService';

import { comparePasswords } from '../../../utils/validators/comparePasswords';
import { registerValidation } from '../../../utils/validators/registerValidations';

import UserContext from '../../../contexts/UserContext';


export function Register({ closeModalHandler }) {
    const [formData, setFormData] = useState({
        firstName: { value: '', error: null },
        lastName: { value: '', error: null },
        username: { value: '', error: null },
        email: { value: '', error: null },
        password: { value: '', error: null },
        rePassword: { value: '', error: null },
        bio: { value: '', error: null }
    });
    const [errorFromServer, setErrorFromServer] = useState(null);
    
    const { updateUser } = useContext(UserContext);

    function closeHandler(e) {
        e.preventDefault();

        if (e.target.className !== 'login-area') return;
        closeModalHandler('register');
    }

    function changeHandler(e) {
        const validationResult = e.target.name !== 'rePassword' ? registerValidation(e.target.name, e.target.value) : comparePasswords(formData.password.value, e.target.value);

        setFormData(state => ({ ...state, [e.target.name]: { value: e.target.value, error: validationResult } }));
    }

    function submitHandler(e) {
        const entries = Object.entries(formData).map(x => [x[0], x[1].value]);

        authService.register(Object.fromEntries(entries))
            .then(data => {
                updateUser(data);
                closeModalHandler('register');
            })
            .catch(err => setErrorFromServer(err.message));
    }

    return (
        <div className="login-area" onClick={closeHandler}>
            <div className="login-box">
                <button onClick={closeModalHandler.bind(null, 'register')}><AiOutlineClose /></button>
                <h2>REGISTER</h2>
                <form method="POST">
                    <h6>First Name*:</h6>
                    <input type="text" name="firstName" value={formData.firstName.value} onChange={changeHandler} />
                    {formData.firstName.error && <p className={styles['error-message']}>❌{formData.firstName.error}</p>}
                    <h6>Last Name*:</h6>
                    <input type="text" name="lastName" value={formData.lastName.value} onChange={changeHandler} />
                    {formData.lastName.error && <p className={styles['error-message']}>❌{formData.lastName.error}</p>}
                    <h6>Username*:</h6>
                    <input type="text" name="username" value={formData.username.value} onChange={changeHandler} />
                    {formData.username.error && <p className={styles['error-message']}>❌{formData.username.error}</p>}
                    <h6>Email*:</h6>
                    <input type="text" name="email" value={formData.email.value} onChange={changeHandler} />
                    {formData.email.error && <p className={styles['error-message']}>❌{formData.email.error}</p>}
                    <h6>Password*:</h6>
                    <input type="password" name="password" value={formData.password.value} onChange={changeHandler} />
                    {formData.password.error && <p className={styles['error-message']}>❌{formData.password.error}</p>}
                    <h6>Repeat Password*:</h6>
                    <input type="password" name="rePassword" value={formData.rePassword.value} onChange={changeHandler} />
                    {formData.rePassword.error && <p className={styles['error-message']}>❌{formData.rePassword.error}</p>}
                    <h6>Bio*:</h6>
                    <textarea name="bio" value={formData.bio.value} onChange={changeHandler} />
                    {formData.bio.error && <p className={styles['error-message']}>❌{formData.bio.error}</p>}

                    <button
                        className="theme-btn auth-button"
                        disabled={Object.values(formData).some(x => x.value === '' || x.error)}
                        onClick={submitHandler}
                    >
                        REGISTER
                    </button>
                    {errorFromServer && <p className={styles['error-message']}>❌{errorFromServer}</p>}
                </form>
            </div>
        </div>
    )
}