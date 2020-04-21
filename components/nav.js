import NavLink from './navlink';
import styles from '../styles/nav.module.css';
 
function Nav() {
    return (
        <nav className={styles.bar}>
            <ul className={styles.list}>
                <NavLink href="/">
                    Home
                </NavLink>
                <li className={styles.item}>
                    <NavLink href="/genericbot">
                        GenericBot
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink href="/cdn">
                        CDN
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink href="/projects">
                        Other Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav