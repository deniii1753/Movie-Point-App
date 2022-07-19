export function MovieCreate() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area-content">
                                <h1>Add Movie</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box movies-container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <h2>Add Movie</h2>
                            </div>

                            <div className="add-movie col-lg-12">
                                <form action="">
                                    <label htmlFor="title">Movie Name: </label>
                                    <input type="text" id="title" name="title" />
                                    <label htmlFor="writer">Writer: </label>
                                    <input type="text" id="writer" name="writer" />
                                    <label htmlFor="director">Director: </label>
                                    <input type="text" id="director" name="director" />
                                    <label htmlFor="genre">Genre: </label>
                                    <input type="text" id="genre" name="genre" />
                                    <label htmlFor="time">Time: </label>
                                    <input type="Number" id="time" name="time" />
                                    <label htmlFor="releaseDate">Release date: </label>
                                    <input type="text" id="releaseDate" name="releaseDate" />
                                    <label htmlFor="languages">Language: </label>
                                    <input type="text" id="languages" name="languages" />
                                    <label htmlFor="trailer">Trailer: </label>
                                    <input type="text" id="trailer" name="trailer" />
                                    <label htmlFor="imgUrl">Image: </label>
                                    <input type="text" id="imgUrl" name="imgUrl" />
                                    <label htmlFor="author">Author: </label>
                                    <input type="text" id="author" name="author" />
                                    <label htmlFor="authorImg">Author Image: </label>
                                    <input type="text" id="authorImg" name="authorImg" />
                                    <label htmlFor="description">Description:</label>
                                    <textarea name="description" id="description" className="textarea-container"></textarea>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}