import Logo from './logo';
import styles from '../styles/header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}

export default Header;