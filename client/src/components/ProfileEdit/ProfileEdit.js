import {useState, useEffect} from 'react';
import { ProfileEditHeader } from "./ProfileEditHeader/ProfileEditHeader";

export function ProfileEdit() {
    const [formData, setFormData] = useState({
        firstName: {value: '', error: null},
        lastName: {value: '', error: null},
        height: {value: '', error: null},
        weight: {value: '', error: null},
        eyeColor: {value: '', error: null},
        hairColor: {value: '', error: null},
        birthday: {value: '', error: null},
        language: {value: '', error: null},
        hobbies: {value: '', error: null},
        bio: {value: '', error: null},

    });

    function changeHandler() {
        console.log('change handler');
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
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
                                    <label htmlFor="firstname">First Name*: </label>
                                    <input type="text" id="firstname" name="firstname" value={formData.firstName.value} onChange={changeHandler} />
                                    {formData.firstName.error && <p className="error-message">❌{formData.firstName.error}</p>}
                                    <label htmlFor="lastName">Last Name*: </label>
                                    <input type="text" id="lastName" name="lastName" value={formData.lastName.value} onChange={changeHandler} />
                                    {formData.lastName.error && <p className="error-message">❌{formData.lastName.error}</p>}
                                    <label htmlFor="height">Height: </label>
                                    <input type="text" id="height" name="height" value={formData.height.value} onChange={changeHandler} />
                                    {formData.height.error && <p className="error-message">❌{formData.height.error}</p>}
                                    <label htmlFor="weight">Weight: </label>
                                    <input type="text" value={formData.weight.value}  onChange={changeHandler}/>
                                    {formData.weight.error && <p className="error-message">❌{formData.weight.error}</p>}
                                    <label htmlFor="eyeColor">Eye Color: </label>
                                    <input type="text" id="eyeColor" name="eyeColor" value={formData.eyeColor.value} onChange={changeHandler} />
                                    {formData.eyeColor.error && <p className="error-message">❌{formData.eyeColor.error}</p>}
                                    <label htmlFor="hairColor">Hair Color: </label>
                                    <input type="text" id="hairColor" name="hairColor" value={formData.hairColor.value} onChange={changeHandler} />
                                    {formData.hairColor.error && <p className="error-message">❌{formData.hairColor.error}</p>}
                                    <label htmlFor="birthday">Birthday: </label>
                                    <input type="text" id="birthday" name="birthday" value={formData.birthday.value} onChange={changeHandler} />
                                    {formData.birthday.error && <p className="error-message">❌{formData.birthday.error}</p>}
                                    <label htmlFor="language">Language: </label>
                                    <input type="text" id="language" name="language" value={formData.language.value} onChange={changeHandler} />
                                    {formData.language.error && <p className="error-message">❌{formData.language.error}</p>}
                                    <label htmlFor="hobbies">Hobbies*: </label>
                                    <input type="text" id="hobbies" name="hobbies" value={formData.hobbies.value} onChange={changeHandler} />
                                    {formData.hobbies.error && <p className="error-message">❌{formData.hobbies.error}</p>}
                                    <label htmlFor="bio">Biography*:</label>
                                    <textarea name="bio" id="bio" className="textarea-container" value={formData.bio.value} onChange={changeHandler} />
                                    {formData.bio.error && <p className="error-message">❌{formData.bio.error}</p>}

                                    <button
                                        disabled={Object.values(formData).some(x => x.error || x.value === '')}
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