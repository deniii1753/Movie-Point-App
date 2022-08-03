import styles from './TrailerModal.module.css';

export function TrailerModal({ trailerUrl, closeHandler }) {

    return (
        <div className="modal" onClick={closeHandler}>
            <div className={styles["video-resizer"]}>
                <div className={styles["video-container"]}>
                    <iframe
                        className={styles["video-iframe"]}
                        title="movie-trailer"
                        src={getParsedYoutubeLink(trailerUrl)}
                        allow="autoplay"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

function getParsedYoutubeLink(link) {
    const tokens = link.split('?');

    const videoId = tokens.find(x => x.startsWith('v='))?.split('v=').pop() || '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}