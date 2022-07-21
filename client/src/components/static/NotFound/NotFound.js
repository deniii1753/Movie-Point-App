import { Link } from "react-router-dom";
import styles from './NotFound.module.css';

export function NotFound() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={styles.notfound}>
                            <div className={styles['notfound-404']}>
                                <h1>4<span>0</span>4</h1>
                            </div>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <Link to="/">home page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}