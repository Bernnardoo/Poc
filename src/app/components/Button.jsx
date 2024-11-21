import styles from './Button.module.css';
export default function Button({ children, func }) {
    return (
        <button onClick={func} className={styles.button}>{children}</button>
    );
}