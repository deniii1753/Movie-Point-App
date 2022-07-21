import styles from './ServerError.module.css';

export function ServerError() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row justify-content-center flex-column align-items-center">
                        <div className={styles.error}>Error</div>
                        <div className={styles["error-num"]}>500
                            <div className={styles["error-num__clip"]}>500</div>
                        </div>
                        <p className={styles.desc}>There seems to be a problem with the server.</p>
                        <p className={styles.desc2}>If the problem presists please contact us! </p>
                    </div>
                </div>
            </section>
        </>
    );
}