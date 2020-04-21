import { useRouter } from 'next/router'
import styles from '../styles/nav.module.css';

function NavLink({ children, href }) {
  const router = useRouter()
  let style = router.pathname === href ? {
    background: '#3a444a',
    borderTop: '4px solid #61a8df',
	color: '#fff',
  } : {}


  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
      <li style={style} className={styles.item}>
        <a href={href} onClick={handleClick} className={styles.link}>
            {children}
        </a>
    </li>
  )
}

export default NavLink
