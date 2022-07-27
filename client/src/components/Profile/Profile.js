import { useContext, useEffect, useState } from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdSettings } from 'react-icons/io';

import './Profile.css';

import UserContext from '../../contexts/UserContext';

import * as userService from '../../services/userService';

export function Profile() {
    const [user, setUser] = useState({});
    const { user: userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userData['X-Auth-Token']);
        userService.getUser(userData['X-Auth-Token'])
            .then(data => setUser(data))
            .catch(err => {
                toast.error(err.message);
                navigate('/500');
            });
    }, [navigate, userData]);

    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area-content">
                                <h1>Celebrities Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box">
                        <div className="row flexbox-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <div className="transformers-content">
                                    <img src={user.imgUrl} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="transformers-content mtr-30">
                                    <h2>{user.firstName} {user.lastName} <IoMdSettings size={20} color={'white'} /></h2>
                                    <ul>
                                        <li>
                                            <div className="transformers-left">
                                                Height:
                                            </div>
                                            <div className="transformers-right">
                                                {user.height || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Weight:
                                            </div>
                                            <div className="transformers-right">
                                                {user.weight || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Eye Color:
                                            </div>
                                            <div className="transformers-right">
                                                {user.eyeColor || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Hair Color:
                                            </div>
                                            <div className="transformers-right">
                                                {user.hairColor || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Birthday:
                                            </div>
                                            <div className="transformers-right">
                                                {user.birthday || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Language:
                                            </div>
                                            <div className="transformers-right">
                                            {user.language || 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Hobby:
                                            </div>
                                            <div className="transformers-right">
                                            {user.hobbies?.length ? user.hobbies.join(' | ') : "N/A"}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Follow:
                                            </div>
                                            <div className="transformers-right follow-social-media-profile">
                                                <a href="/"><AiFillTwitterCircle size={20} /></a>
                                                <a href="/"><AiFillFacebook size={20} /></a>
                                                <a href="/"><AiFillInstagram size={20} /></a>
                                                <a href="/"><AiFillYoutube size={20} /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="details-content">
                                <div className="details-overview">
                                    <h2>Overview</h2>
                                    <p>{user.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}