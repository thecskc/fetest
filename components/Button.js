import styles from './Button.module.css'

export default function Button(){
    return(
        <button className={styles.buttonStyle}>
            <span className={styles.textContent}>Get Early Access</span>
        </button>
    )
}