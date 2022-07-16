export function Home() {
    return (
        <>
            <section className="hero-area" id="home">
                <div className="container">
                    <div className="hero-area-slider">
                        <div className="row hero-area-slide">
                            <div className="col-lg-6 col-md-5">
                                <div className="hero-area-content">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNTA3N2Q0ZTAtODJjNy00MmQzLWJlMmItOGFmNDI0ODgxN2QwXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
                                        alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                <div className="hero-area-content pr-50">
                                    <h2>The Devil Princess</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                    <p>She is a devil princess from the demon world. She grew up sheltered by her parents and
                                        doesn't really know how to be evil or any of the common actions, She is unable to cry
                                        due to Keita's accidental first wish, despite needed for him to wish...</p>
                                    <h3>Author:</h3>
                                    <div className="slide-cast">
                                        <div className="single-slide-cast">
                                            <img src="data:image/webp;base64,UklGRswFAABXRUJQVlA4IMAFAAAwHwCdASpbAIkAPpEwpFIlrSWlkYGgEglnBnANLByFLk+zyMOCeaOwy1BrRv7VIoi/aLVrOuSY6K3pBo4aUxbjNroPewuG6Vw7z7FMD1WzvJ/EHEgneX8Ls676sUb0lncVIPtT2rEg9sghYVoGByfclGrrSf+uOxP2DiHLPlRFsKyGwCGYBW6h1Ztvv6JLO/NvMJcCkyGS90/1HWSNBxOWSjWkFl+xZ5BtmZxTf2MIb3889smCw5cymFm/WRqMj8Mco+/LImCfnsYWx6MLqlSe9a7cvu/3yO0QUVklFzcTt122Rf4A0QBQ9J15RQ03QX0E0e7a7i94dvgOs6cZvreEKAAA/vAYElJfbroQ6t3fu8IKJCR+2Ut4cUgkLK1fhFX3T9jp5KspI19LYjw789onykYt83DGsx2sG5LI5WDxyfXnJqkpJbxY9D1Hn+lGctkviJH1IQsQLl/wjO2S+HiwfiieoF9MlA/JCsvBdhhDPFBihUrikhe7NWePcxySaCd8xCob0a4ogmikGucetF0oGB73Nrc3H3mBiZABZs2jXZ+DvXmSyIxrtTiIfF53leYCyXRYYK1vVt9vW/ZbUqZTwlLNAYP65/wJNFj7VZc0CYUWs908sf2923VacQLQbNFk7m957VBNeuVYAr8fA4x/faKOuKG9lCY67kn0r2duMW0OMZYPeG3S+Y4u0SPyclo8Y40siQvK1NNSgN7ELHmKlOBYgFO3ohtXmKdzp/deY2aJbOblpfAzr/Y1Gt7388eNBUSVkfzvD/JEKNTdSdsR5MYhl2hpUjpwJvyJx8VayKvrI8ro75ZkHM995Fhs/tTz5VuQFH4s7SSTVpdA3GsneEuoTENBg2nhfGrLwDhoAZa+OnRf2jE5zP7rFGlleQQBuqfFA2S2ZUE9tBqHY0KhiqdobnjhxSjtgt9MJdEXrrAu/NaHp3Kch8/mJEMPV6EIu6n8vhZ+91EIf7KW+klX6qWHD51hrCaNck2TWQaaqwHmmvpCE2Y2BqelmpWpeX1Pe4YeERDQ+ZTI8TjuXcqCKV0RwsaDlieVZf05QiDx73MIjnqGL8hjtKo02a6K9j6c25F9lk2JkAQeF2sjFtZQSDGMtgZpi9+UpSbrFx2wu+rbY/0oKziaChszxhzoYM9Xe2F25B4CleGPVvAVk1QY8dZKSAP4yBF6RmadNX/HZlPqliUTG+Ajn4EtgWy9KOfjxRww1RTYoNQuWpdccXlH9l+GkGXIEjy7bGXcJqxLTnuqSrRZ9krgTs41Pq3Q7mLttdrL/IuUVsqElqDu0VX+OjUdXbSVPLX3y7b1ENEtTSZaKowfNgge01/lGCWl4CN+fq3+u6nHrCBZSoCyZwZ/P+9qDBKCoTUXOSqcnLZkUnMM3owV0GYDEQx5Pw21e7iMRcfYMTUp7rjdxHN0jF8wlHo2r819FkfeprNWcTg5MiEX3bEljjJ9fyu8PhmpQAZ53lHg7AaKzvZD2RhvZXDrcjNH+NP7nkc8OVzUaT5ESbtRherSJBk0Qu9/bSPKQUZJuNrxPFI5OV4E4tMg0BbdY331TFCeXO5S09g4HJeM0tXrejhhA5cmdXhv7FACUeJhQlh8uwdhD5L67nEhFQ1bJ2axe+67iEBvP44b2u2k7jOl1/3K7BdIQxePLTokTUTc35a2wvDTWYUYPD3+YxEmMEjbwjt+++DwpECrCSf21qkdOdUiXlms3B0DnSvp7lN9MWlCfnRlj+J4cQdy2+I7xCcWUCoCOli5Ghv28s6j2jipSXwwOGwaaqDQClqmaMvOZNIUL4qT2xw3s3jbjRpciQMgEK9YlZPoWWo0xBoSmMnJczUYnzudkbh9Obw5F2O/um7McoWbXu/GZjrHmZNt+rza/fTw/m5L/UNH4f03ShZgWm0xVLkyAp5O/sQu6xYkkytKNlCOLo3pyDeAZOsoTHNWXOO4UU+30daPO5igAA=="
                                                alt="about" />
                                            <span className="author">Ivan Ivanov</span>
                                        </div>
                                    </div>
                                    <div className="slide-trailor">
                                        <h3>Movie Details:</h3>
                                        <a className="theme-btn" href="./movie-details.html">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-area pt-60">
                <div className="container home-page-movies-container">
                    <div className="row flexbox-center">
                        <div className="col-lg-6 text-center text-lg-left">
                            <div className="section-title">
                                <h1><i className="icofont icofont-movie"></i>Latest movies</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="portfolio-menu">
                                <ul>
                                    <li data-filter="*" className="active">Recently Added</li>
                                    <li data-filter=".top">Top 5</li>
                                    <li data-filter=".soon">Comming Soon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}