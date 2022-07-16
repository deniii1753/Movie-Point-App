export function MovieDetails() {
    return (
        <>
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-area-content">
                                <h1>Movie Details Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="transformers-area">
                <div class="container">
                    <div class="transformers-box">
                        <div class="row flexbox-center">
                            <div class="col-lg-5 text-lg-left text-center">
                                <div class="transformers-content">
                                    <img src="/img/slide2.png" alt="about" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="transformers-content">
                                    <h2>The Transformers</h2>
                                    <p>3D | Animation | Action | Sci-Fi</p>
                                    <ul>
                                        <li>
                                            <div class="transformers-left">
                                                Movie:
                                            </div>
                                            <div class="transformers-right">
                                                <a href="/">Sci-Fic</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transformers-left">
                                                Writer:
                                            </div>
                                            <div class="transformers-right">
                                                Stephen McFeely, Christopher Markus
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transformers-left">
                                                Director:
                                            </div>
                                            <div class="transformers-right">
                                                Joe Johnston
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transformers-left">
                                                Time:
                                            </div>
                                            <div class="transformers-right">
                                                190m
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transformers-left">
                                                Release:
                                            </div>
                                            <div class="transformers-right">
                                                2018-07-22
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transformers-left">
                                                Language:
                                            </div>
                                            <div class="transformers-right">
                                                English, Russian
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/" class="like-btn">👍Like</a>
                            <a href="/" class="dislike-btn">👎Dislike</a>
                        </div>
                        <a href="https://www.youtube.com/watch?v=LlspjxekvzI" class="theme-btn popup-youtube">Watch Trailer</a>
                    </div>
                </div>
            </section>

            <section class="details-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="details-content">
                                <div class="details-overview">
                                    <h2>Overview</h2>
                                    <p>Humans are at war with the Transformers, and Optimus Prime is gone. The key to saving the future lies buried in the secrets of the past and the hidden history of Transformers on Earth. Now it's up to the unlikely alliance of inventor Cade Yeager, Bumblebee, a n English lord and an Oxford professor to save the world. Transformers: The Last Knight has a deeper mythos and bigger spectacle than its predecessors, yet still ends up being mostly hollow and cacophonous. The first "Transformers" movie that could actually be characterized as badass. Which isn't a bad thing. It may, in fact, be better.</p>
                                </div>
                                {/* <div class="details-reply">
                                    <h2>Leave a Reply</h2>
                                    <form action="/">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="select-container">
                                                    <input type="text" placeholder="Name" />
                                                    <i class="icofont icofont-ui-user"></i>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="select-container">
                                                    <input type="text" placeholder="Email" />
                                                    <i class="icofont icofont-envelope"></i>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="select-container">
                                                    <input type="text" placeholder="Phone" />
                                                    <i class="icofont icofont-phone"></i>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="textarea-container">
                                                    <textarea placeholder="Type Here Message"></textarea>
                                                    <button><i class="icofont icofont-send-mail"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="details-comment">
                                    <a class="theme-btn theme-btn2" href="/">Post Comment</a>
                                    <p>You may use these HTML tags and attributes: You may use these HTML tags and attributes: You may use these HTML tags and attributes: </p>
                                </div> */}
                                {/* <div class="details-thumb">
                                    <div class="details-thumb-prev">
                                        <div class="thumb-icon">
                                            <i class="icofont icofont-simple-left"></i>
                                        </div>
                                        <div class="thumb-text">
                                            <h4>Previous Post</h4>
                                            <p>Standard Post With Gallery</p>
                                        </div>
                                    </div>
                                    <div class="details-thumb-next">
                                        <div class="thumb-text">
                                            <h4>Next Post</h4>
                                            <p>Standard Post With Preview Image</p>
                                        </div>
                                        <div class="thumb-icon">
                                            <i class="icofont icofont-simple-right"></i>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}