import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import userContext from '../../contexts/UserContext';

import * as userService from '../../services/userService';

import { profileEditValidations } from '../../utils/validators/profileEditValidations';
import { ProfileEditHeader } from "./ProfileEditHeader/ProfileEditHeader";

let _id;
export function ProfileEdit() {
    const [formData, setFormData] = useState({
        firstName: { value: '', error: null },
        lastName: { value: '', error: null },
        imgUrl: { value: '', error: null },
        height: { value: '', error: null },
        weight: { value: '', error: null },
        eyeColor: { value: '', error: null },
        hairColor: { value: '', error: null },
        birthday: { value: '', error: null },
        language: { value: '', error: null },
        hobbies: { value: '', error: null },
        bio: { value: '', error: null },
        twitter: { value: '', error: null },
        facebook: { value: '', error: null },
        instagram: { value: '', error: null },
        youtube: { value: '', error: null },
    });
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService.getUser(user['X-Auth-Token'])
            .then(data => {
                _id = data._id;
                setFormData(state => ({
                    ...state,
                    firstName: { value: data.firstName, error: null },
                    lastName: { value: data.lastName, error: null },
                    imgUrl: { value: data.imgUrl, error: null },
                    height: { value: data.height, error: null },
                    weight: { value: data.weight, error: null },
                    eyeColor: { value: data.eyeColor, error: null },
                    hairColor: { value: data.hairColor, error: null },
                    birthday: { value: data.birthday, error: null },
                    language: { value: data.language, error: null },
                    hobbies: { value: data.hobbies, error: null },
                    bio: { value: data.bio, error: null },
                    twitter: { value: data.socials.twitter || '', error: null },
                    facebook: { value: data.socials.facebook || '', error: null },
                    instagram: { value: data.socials.instagram || '', error: null },
                    youtube: { value: data.socials.youtube || '', error: null }
                }))
            })
            .catch(err => {
                toast.error(err.message);
                navigate('/profile');
            });

    }, [user, navigate])

    function changeHandler(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData(state => ({
            ...state,
            [fieldName]: { value: fieldValue, error: profileEditValidations(fieldName.trim(), fieldValue.trim()) }
        }))

    }

    function submitHandler(e) {
        e.preventDefault();

        userService.editUser({
            _id,
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            imgUrl: formData.imgUrl.value,
            height: formData.height.value,
            weight: formData.weight.value,
            eyeColor: formData.eyeColor.value,
            hairColor: formData.hairColor.value,
            birthday: formData.birthday.value,
            language: formData.language.value,
            hobbies: formData.hobbies.value,
            socials: {
                twitter: formData.twitter.value,
                facebook: formData.facebook.value,
                instagram: formData.instagram.value,
                youtube: formData.youtube.value,
            },
            bio: formData.bio.value
        }, user["X-Auth-Token"])
            .then(() => {
                toast.success('You successfully edit your profile!');
                navigate('/profile');
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <>
            <ProfileEditHeader />

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box movies-container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <h2>Edit Profile</h2>
                            </div>

                            <div className="add-movie col-lg-12">
                                <form method="POST" onSubmit={submitHandler}>
                                    <label htmlFor="firstName">First Name*: </label>
                                    <input type="text" id="firstName" name="firstName" value={formData.firstName?.value} onChange={changeHandler} />
                                    {formData.firstName?.error && <p className="error-message">❌{formData.firstName?.error}</p>}
                                    <label htmlFor="lastName">Last Name*: </label>
                                    <input type="text" id="lastName" name="lastName" value={formData.lastName?.value} onChange={changeHandler} />
                                    {formData.lastName?.error && <p className="error-message">❌{formData.lastName?.error}</p>}
                                    <label htmlFor="height">Height: </label>
                                    <input type="number" id="height" name="height" value={formData.height?.value} onChange={changeHandler} />
                                    {formData.height?.error && <p className="error-message">❌{formData.height?.error}</p>}
                                    <label htmlFor="weight">Weight: </label>
                                    <input type="number" id="weight" name="weight" value={formData.weight?.value} onChange={changeHandler} />
                                    {formData.weight?.error && <p className="error-message">❌{formData.weight?.error}</p>}
                                    <label htmlFor="eyeColor">Eye Color: </label>
                                    <input type="text" id="eyeColor" name="eyeColor" value={formData.eyeColor?.value} onChange={changeHandler} />
                                    {formData.eyeColor?.error && <p className="error-message">❌{formData.eyeColor?.error}</p>}
                                    <label htmlFor="hairColor">Hair Color: </label>
                                    <input type="text" id="hairColor" name="hairColor" value={formData.hairColor?.value} onChange={changeHandler} />
                                    {formData.hairColor?.error && <p className="error-message">❌{formData.hairColor?.error}</p>}
                                    <label htmlFor="birthday">Birthday: </label>
                                    <input type="text" id="birthday" name="birthday" value={formData.birthday?.value} onChange={changeHandler} />
                                    {formData.birthday?.error && <p className="error-message">❌{formData.birthday?.error}</p>}
                                    <label htmlFor="language">Language: </label>
                                    <input type="text" id="language" name="language" value={formData.language?.value} onChange={changeHandler} />
                                    {formData.language?.error && <p className="error-message">❌{formData.language?.error}</p>}
                                    <label htmlFor="hobbies">Hobbies: </label>
                                    <input type="text" id="hobbies" name="hobbies" value={formData.hobbies?.value} onChange={changeHandler} />
                                    {formData.hobbies?.error && <p className="error-message">❌{formData.hobbies?.error}</p>}
                                    <label htmlFor="imgUrl">Image*: </label>
                                    <input type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl?.value} onChange={changeHandler} />
                                    {formData.imgUrl?.error && <p className="error-message">❌{formData.imgUrl?.error}</p>}
                                    <label htmlFor="twitter">Twitter: </label>
                                    <input type="text" id="twitter" name="twitter" value={formData.twitter?.value} onChange={changeHandler} />
                                    {formData.twitter?.error && <p className="error-message">❌{formData.twitter?.error}</p>}
                                    <label htmlFor="facebook">Facebook: </label>
                                    <input type="text" id="facebook" name="facebook" value={formData.facebook?.value} onChange={changeHandler} />
                                    {formData.facebook?.error && <p className="error-message">❌{formData.facebook?.error}</p>}
                                    <label htmlFor="instagram">Instagram: </label>
                                    <input type="text" id="instagram" name="instagram" value={formData.instagram?.value} onChange={changeHandler} />
                                    {formData.instagram?.error && <p className="error-message">❌{formData.instagram?.error}</p>}
                                    <label htmlFor="youtube">YouTube: </label>
                                    <input type="text" id="youtube" name="youtube" value={formData.youtube?.value} onChange={changeHandler} />
                                    {formData.youtube?.error && <p className="error-message">❌{formData.youtube?.error}</p>}
                                    <label htmlFor="bio">Biography*:</label>
                                    <textarea name="bio" id="bio" className="textarea-container" value={formData.bio?.value} onChange={changeHandler} />
                                    {formData.bio?.error && <p className="error-message">❌{formData.bio?.error}</p>}

                                    <button
                                        disabled={
                                            Object.values(formData).some(x => x?.error) ||
                                            formData.firstName?.value === '' ||
                                            formData.lastName?.value === '' ||
                                            formData.imgUrl?.value === ''
                                        }
                                    >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}