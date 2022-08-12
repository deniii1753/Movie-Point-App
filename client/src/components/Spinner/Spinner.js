import styles from './Spinner.module.css';

export function Spinner() {
    return (
        <div className={styles["spinner-background"]}>
            <div className={styles["spinner-box"]}>
                <div className={styles["loader"]} />
            </div>
        </div>
    );
}