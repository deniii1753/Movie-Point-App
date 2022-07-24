import { useState } from "react";
import { TrailerModal } from "./TrailerModal";

export function Trailer({ trailerUrl }) {
    const [isModalOpened, setIsModalOpened] = useState(false);

    function clickHandler(e) {
        e.preventDefault();

        setIsModalOpened(true);
    }

    function closeHandler() {
        setIsModalOpened(false);
    }

    return (
        <>
            {isModalOpened && <TrailerModal trailerUrl={trailerUrl} closeHandler={closeHandler}/>}
            <button href="watch-trailer" className="theme-btn popup-youtube" onClick={clickHandler}>Watch Trailer</button>
        </>
    )
}