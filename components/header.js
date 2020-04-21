import Logo from './logo';
import Nav from './nav'
import styles from '../styles/header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header;