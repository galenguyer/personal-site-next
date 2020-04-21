import NavLink from './navlink';
import styles from '../styles/nav.module.css';
 
function Nav() {
    return (
        <nav className={styles.bar}>
            <ul className={styles.list}>
                <NavLink href="/">
                    Home
                </NavLink>
                <NavLink href="/genericbot">
                    GenericBot
                </NavLink>
                <NavLink href="/cdn">
                    CDN
                </NavLink>
                <NavLink href="/projects">
                    Other Projects
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav