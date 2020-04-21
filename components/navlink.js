import { useRouter } from 'next/router'
import styles from '../styles/nav.module.css';

function NavLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    background: '#3a444a',
    borderTopColor: '#61a8df',
	color: '#fff',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
      <li className={styles.item}>
        <a href={href} onClick={handleClick} className={styles.link}>
            {children}
        </a>
    </li>
  )
}

export default NavLink
