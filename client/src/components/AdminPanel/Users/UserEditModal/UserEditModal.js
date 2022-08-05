import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineClose, AiFillMail, AiFillFileImage, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { BiRename } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

import UserContext from '../../../../contexts/UserContext';
import AdminPanelUsersContext from '../../../../contexts/AdminPanelUsersContext';

import styles from '../../Modals.module.css';

import { profileEditValidations } from '../../../../utils/validators/profileEditValidations';
import { comparePasswords } from '../../../../utils/validators/comparePasswords';

import * as userService from '../../../../services/userService';

export function UserEditModal({ closeHandler, user }) {
    const [formData, setFormData] = useState({
        firstName: { value: '', error: null },
        lastName: { value: '', error: null },
        username: { value: '', error: null },
        email: { value: '', error: null },
        imgUrl: { value: '', error: null },
        password: { value: '', error: null },
        rePassword: { value: '', error: null },
        facebook: { value: '', error: null },
        instagram: { value: '', error: null },
        twitter: { value: '', error: null },
        youtube: { value: '', error: null }
    });
    const { user: adminUser } = useContext(UserContext);
    const { editUser } = useContext(AdminPanelUsersContext);
    useEffect(() => {
        setFormData(state => ({
            ...state,
            firstName: { value: user.firstName, error: null },
            lastName: { value: user.lastName, error: null },
            username: { value: user.username, error: null },
            email: { value: user.email, error: null },
            imgUrl: { value: user.imgUrl, error: null },
            twitter: { value: user.socials?.twitter || '', error: null },
            facebook: { value: user.socials?.facebook || '', error: null },
            instagram: { value: user.socials?.instagram || '', error: null },
            youtube: { value: user.socials?.youtube || '', error: null }
        }));
    }, [user]);

    function changeHandler(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validationResult = fieldName === 'rePassword' ? comparePasswords(formData.password.value, fieldValue) : profileEditValidations(fieldName.trim(), fieldValue.trim());

        setFormData(state => ({
            ...state,
            [fieldName]: { value: fieldValue, error: validationResult }
        }))

    }

    function closeModal(e) {
        e.preventDefault();

        closeHandler();
    }

    function submitHandler(e) {
        e.preventDefault();

        userService.editUser(user._id, {
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            imgUrl: formData.imgUrl.value,
            username: formData.username.value,
            email: formData.email.value,
            password: formData.password.value,
            socials: {
                twitter: formData.twitter.value,
                facebook: formData.facebook.value,
                instagram: formData.instagram.value,
                youtube: formData.youtube.value,
            },
        }, adminUser["X-Auth-Token"])
            .then(data => {
                editUser(data);
                toast.success(`You successfully edit ${formData.username.value}'s profile!`);
                closeHandler();
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]} onClick={closeHandler} />
            <div className={styles["modal"]}>
                <div className={styles["user-container"]}>
                    <header className={styles["headers"]}>
                        <h2>Edit User</h2>
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
                            <label htmlFor="facebook">Facebook</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillFacebook size={25} /></span>
                                <input id="facebook" name="facebook" type="text" value={formData.facebook.value} onChange={changeHandler} />
                            </div>
                            {formData.facebook.error && <p className={styles["form-error"]}>❌{formData.facebook.error}</p>}
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="instagram">Instagram</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillInstagram size={25} /></span>
                                <input id="instagram" name="instagram" type="text" value={formData.instagram.value} onChange={changeHandler} />
                            </div>
                            {formData.instagram.error && <p className={styles["form-error"]}>❌{formData.instagram.error}</p>}
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="twitter">Twitter</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillTwitterSquare size={25} /></span>
                                <input id="twitter" name="twitter" type="text" value={formData.twitter.value} onChange={changeHandler} />
                            </div>
                            {formData.twitter.error && <p className={styles["form-error"]}>❌{formData.twitter.error}</p>}
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="youtube">YouTube</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillYoutube size={25} /></span>
                                <input id="youtube" name="youtube" type="text" value={formData.youtube.value} onChange={changeHandler} />
                            </div>
                            {formData.youtube.error && <p className={styles["form-error"]}>❌{formData.youtube.error}</p>}
                        </div>

                        <div className={styles["form-actions"]}>
                            <button
                                className={styles["action-save"]}
                                onClick={submitHandler}
                                disabled={Object.values(formData).some(x => x.error)}
                            >
                                Save
                            </button>
                            <button className={styles["action-cancel"]} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}