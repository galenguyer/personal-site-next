import Link from 'next/link';
import styles from '../styles/logo.module.css';
 
function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.bars}>
                <h1 className={styles.name}>
                    <Link href='/'><a>Galen Guyer</a></Link>
                </h1>
                <span className={styles.description}>Full-Stack Software Engineer</span>
            </div>
        </div>
    )
}

export default Logo;