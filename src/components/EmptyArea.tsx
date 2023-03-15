import styles from './EmptyArea.module.css';
import clipboard from '../assets/clipboard.svg';

export function EmptyArea() {

    return (
        <div className={styles.emptyArea}>
            <img src={clipboard} alt='clipboard' />
            <span
                className={styles.firstText}>
                    You don't have any tasks registered yet
                </span>
            <span
                className={styles.secondText}>
                    Add tasks and organize your to-do items
                </span>
        </div>
    )
}