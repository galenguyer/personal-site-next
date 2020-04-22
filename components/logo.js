import Link from 'next/link';
import styles from '../styles/logo.module.css';
 
function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.bars}>
                <Link href='/'>
                    <h1 className={styles.name}><a>Galen Guyer</a></h1>
                </Link>
                <span className={styles.description}>Full-Stack Software Engineer</span>
            </div>
        </div>
    )
}

export default Logo;