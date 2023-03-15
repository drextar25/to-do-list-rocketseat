import styles from './Header.module.css';

import rocket from '../assets/rocket.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="Rocket" />
            <h1
                className={styles.title}>
                <span className={styles.to}>
                    To
                </span>
                <span className={styles.do}>
                    Do
                </span>
            </h1>
        </header>
    );
}
