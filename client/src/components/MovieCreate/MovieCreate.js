export function MovieCreate() {
    return (
        <>
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-area-content">
                                <h1>Add Movie</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="transformers-area">
                <div class="container">
                    <div class="transformers-box">
                        <div class="row justify-content-md-center">
                            <div class="col-md-auto">
                                <h2>Add Movie</h2>
                            </div>

                            <div class="add-movie col-lg-12">
                                <form action="">
                                    <label for="username">Movie Name: </label>
                                    <input type="text" id="username" name="username" />
                                    <label for="writer">Writer: </label>
                                    <input type="text" id="writer" name="writer" />
                                    <label for="director">Director: </label>
                                    <input type="text" id="director" name="director" />
                                    <label for="genre">Genre: </label>
                                    <input type="text" id="genre" name="genre" />
                                    <label for="time">Time: </label>
                                    <input type="Number" id="time" name="time" />
                                    <label for="releaseDate">Release date: </label>
                                    <input type="text" id="releaseDate" name="releaseDate" />
                                    <label for="languages">Language: </label>
                                    <input type="text" id="languages" name="languages" />
                                    <label for="imgUrl">Image: </label>
                                    <input type="text" id="imgUrl" name="imgUrl" />
                                    <label for="author">Author: </label>
                                    <input type="text" id="author" name="author" />
                                    <label for="authorImg">Author Image: </label>
                                    <input type="text" id="authorImg" name="authorImg" />
                                    <label for="description">Description:</label>
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