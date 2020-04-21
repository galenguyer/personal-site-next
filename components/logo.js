import styles from '../styles/logo.module.css';
 
function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.bars}>
                <h1 className={styles.name}>Galen Guyer</h1>
                <span className={styles.description}>Full-Stack Software Engineer studying at the Rochester Institute of Technology</span>
            </div>
        </div>
    )
}

export default Logo;