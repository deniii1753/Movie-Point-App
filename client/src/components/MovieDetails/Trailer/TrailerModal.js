import styles from './TrailerModal.module.css';

export function TrailerModal({ trailerUrl, closeHandler }) {

    return (
        <div className={styles.modal} onClick={closeHandler}>
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
// TODO: fix black bars

function getParsedYoutubeLink(link) {
    const tokens = link.split('?');

    const videoId = tokens.find(x => x.startsWith('v='))?.split('v=').pop() || '';
    console.log(`https://youtube.com/embed/${videoId}?autoplay=1`);
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    // const videoId = tokens.find()
}