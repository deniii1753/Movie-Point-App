import { useContext, useEffect, useState } from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdSettings } from 'react-icons/io';

import './Profile.css';

import UserContext from '../../contexts/UserContext';

import * as userService from '../../services/userService';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { Spinner } from '../Spinner/Spinner';

export function Profile() {
    const [user, setUser] = useState({});
    const { user: userData } = useContext(UserContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        userService.getUser(userData._id, userData['X-Auth-Token'])
            .then(data => {
                setIsLoading(false);
                setUser(data);
            })
            .catch(err => {
                toast.error(err.message);
                navigate('/500');
            });
    }, [navigate, userData]);

    if(isLoading) return <Spinner />
    
    return (
        <>
            <ProfileHeader />
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
                                    <h2>{user.firstName} {user.lastName} <Link to={"/profile/edit"}><IoMdSettings size={20} color={'white'} /></Link></h2>
                                    <ul>
                                        <li>
                                            <div className="transformers-left">
                                                Height:
                                            </div>
                                            <div className="transformers-right">
                                                {user.height ? `${user.height}cm` : 'N/A'}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Weight:
                                            </div>
                                            <div className="transformers-right">
                                                {user.weight ? `${user.weight}kg` : 'N/A'}
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
                                                Hobbies:
                                            </div>
                                            <div className="transformers-right">
                                                {user.hobbies ? user.hobbies : "N/A"}
                                            </div>
                                        </li>
                                        {Object.values(user.socials || {}).some(x => x !== '') &&
                                            <li>
                                                <div className="transformers-left">
                                                    Follow:
                                                </div>
                                                <div className="transformers-right follow-social-media-profile">
                                                    {user.socials?.twitter && <a href={user.socials?.twitter}><AiFillTwitterCircle size={20} /></a>}
                                                    {user.socials?.facebook && <a href={user.socials?.facebook}><AiFillFacebook size={20} /></a>}
                                                    {user.socials?.instagram && <a href={user.socials?.instagram}><AiFillInstagram size={20} /></a>}
                                                    {user.socials?.youtube && <a href={user.socials?.youtube}><AiFillYoutube size={20} /></a>}
                                                </div>
                                            </li>
                                        }
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
                                    <h2>Biography</h2>
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