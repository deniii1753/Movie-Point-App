import { useModal } from "../../../hooks/useModal";
import { TrailerModal } from "./TrailerModal";

export function Trailer({ trailerUrl }) {
    const {isModalOpened, openModal, closeModal } = useModal();

    return (
        <>
            {isModalOpened && <TrailerModal trailerUrl={trailerUrl} closeHandler={closeModal}/>}
            <button href="watch-trailer" className="theme-btn popup-youtube" onClick={openModal}>Watch Trailer</button>
        </>
    )
}