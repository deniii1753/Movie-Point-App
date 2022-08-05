import { useContext, useState } from 'react';
import { AiFillFileImage, AiFillMail, AiOutlineClose, AiFillInfoCircle } from 'react-icons/ai';
import { BiRename } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import AdminPanelUsersContext from '../../../../contexts/AdminPanelUsersContext';

import styles from '../../Modals.module.css';

import { comparePasswords } from '../../../../utils/validators/comparePasswords';
import { profileEditValidations } from '../../../../utils/validators/profileEditValidations';

import * as authService from '../../../../services/authService';

export function UserCreateModal({ closeHandler }) {
    const [formData, setFormData] = useState({
        firstName: { value: '', error: null },
        lastName: { value: '', error: null },
        username: { value: '', error: null },
        email: { value: '', error: null },
        imgUrl: { value: '', error: null },
        password: { value: '', error: null },
        rePassword: { value: '', error: null },
        bio: { value: '', error: null }
    });

    const { addNewUser } = useContext(AdminPanelUsersContext)

    function changeHandler(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validationResult = fieldName === 'rePassword' ? comparePasswords(formData.password.value, fieldValue) : profileEditValidations(fieldName.trim(), fieldValue.trim());

        setFormData(state => ({
            ...state,
            [fieldName]: { value: fieldValue, error: validationResult }
        }))

    }

    function submitHandler(e) {
        e.preventDefault();
        const entries = Object.entries(formData).map(x => [x[0], x[1].value]);

        authService.register(Object.fromEntries(entries))
            .then(data => {
                toast.success(`You successfully registered ${data.username}`);
                addNewUser(data);
                closeHandler();
            })
            .catch(err => toast.error(err.message));
    }

    function closeModal(e) {
        e.preventDefault();

        closeHandler();
    }
    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]} onClick={closeHandler} />
            <div className={styles["modal"]}>
                <div className={styles["user-container"]}>
                    <header className={styles["headers"]}>
                        <h2>Create User</h2>
                        <button className={styles["btn-close"]} onClick={closeHandler}><AiOutlineClose size={20} /></button>
                    </header>
                    <form>
                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="firstName">First name</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="firstName" name="firstName" type="text" value={formData.firstName.value} onChange={changeHandler} />
                                </div>
                                {formData.firstName.error && <p className={styles["form-error"]}>❌{formData.firstName.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="lastName">Last name</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="lastName" name="lastName" type="text" value={formData.lastName.value} onChange={changeHandler} />
                                </div>
                                {formData.lastName.error && <p className={styles["form-error"]}>❌{formData.lastName.error}</p>}
                            </div>
                        </div>

                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="username">Username</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><BiRename size={25} /></span>
                                    <input id="username" name="username" type="text" value={formData.username.value} onChange={changeHandler} />
                                </div>
                                {formData.username.error && <p className={styles["form-error"]}>❌{formData.username.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="email">Email</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><AiFillMail size={23} /></span>
                                    <input id="email" name="email" type="text" value={formData.email.value} onChange={changeHandler} />
                                </div>
                                {formData.email.error && <p className={styles["form-error"]}>❌{formData.email.error}</p>}
                            </div>
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="imgUrl">Image Url</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillFileImage size={25} /></span>
                                <input id="imgUrl" name="imgUrl" type="text" value={formData.imgUrl.value} onChange={changeHandler} />
                            </div>
                            {formData.imgUrl.error && <p className={styles["form-error"]}>❌{formData.imgUrl.error}</p>}
                        </div>

                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="password">Password</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><RiLockPasswordFill size={25} /></span>
                                    <input id="password" name="password" type="password" value={formData.password.value} onChange={changeHandler} />
                                </div>
                                {formData.password.error && <p className={styles["form-error"]}>❌{formData.password.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="rePassword">Repeat Password</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><RiLockPasswordFill size={25} /></span>
                                    <input id="rePassword" name="rePassword" type="password" value={formData.rePassword.value} onChange={changeHandler} />
                                </div>
                                {formData.rePassword.error && <p className={styles["form-error"]}>❌{formData.rePassword.error}</p>}
                            </div>
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="bio">Biography</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillInfoCircle size={25} /></span>
                                <textarea id="bio" name="bio" value={formData.bio.value} onChange={changeHandler} />
                                {/* <input id="bio" name="bio" type="text" value={formData.bio.value} onChange={changeHandler} /> */}
                            </div>
                            {formData.bio.error && <p className={styles["form-error"]}>❌{formData.bio.error}</p>}
                        </div>

                        <div className={styles["form-actions"]}>
                            <button
                                className={styles["action-save"]}
                                onClick={submitHandler}
                                disabled={Object.values(formData).some(x => x.value === '' || x.error)}
                            >
                                Create
                            </button>
                            <button className={styles["action-cancel"]} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}