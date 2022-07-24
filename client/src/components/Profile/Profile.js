import {AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

import './Profile.css';

export function Profile() {
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
                                    <img src="/img/slide4.jpg" alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="transformers-content mtr-30">
                                    <h2>Alex Px.</h2>
                                    <ul>
                                        <li>
                                            <div className="transformers-left">
                                                Height:
                                            </div>
                                            <div className="transformers-right">
                                                5.7”
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Weight:
                                            </div>
                                            <div className="transformers-right">
                                                1136LB
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Eye Color:
                                            </div>
                                            <div className="transformers-right">
                                                Black
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Hair Color:
                                            </div>
                                            <div className="transformers-right">
                                                Black
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Birthday:
                                            </div>
                                            <div className="transformers-right">
                                                1985.Jun.20
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Language:
                                            </div>
                                            <div className="transformers-right">
                                                English, Russian
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Hobby:
                                            </div>
                                            <div className="transformers-right">
                                                Base Ball, Gaming, Exploring, Baook Reading
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Follow:
                                            </div>
                                            <div className="transformers-right follow-social-media-profile">
                                                <a href="/"><AiFillTwitterCircle size={20} /></a>
                                                <a href="/"><AiFillFacebook size={20} /></a>
                                                <a href="/"><AiFillInstagram size={20}/></a>
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
                                    <p>Humans are at war with the Transformers, and Optimus Prime is gone. The key to saving the future lies buried in the secrets of the past and the hidden history of Transformers on Earth. Now it's up to the unlikely alliance of inventor Cade Yeager, Bumblebee, a n English lord and an Oxford professor to save the world. Transformers: The Last Knight has a deeper mythos and bigger spectacle than its predecessors, yet still ends up being mostly hollow and cacophonous. The first "Transformers" movie that could actually be characterized as badass. Which isn't a bad thing. It may, in fact, be better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}