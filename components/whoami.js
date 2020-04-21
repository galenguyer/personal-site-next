import styles from '../styles/whoami.module.css';

function WhoAmI() {
    return (
        <div className={styles.container}>
            {/*<h2 className={styles.name}>Galen Guyer</h2>*/}
            <span className={styles.description}>
                2018 Microsoft Office Security, 2019 Microsoft One Customer Voice Intern.
                <br />
                Software Engineering Student at the Rochester Institute of Technology. 
                <br />
                Full Stack Developer, Systems Administrator, Data Hoarder, and much more.
            </span>

            <div className={styles.links}>
            <a href="#" className={styles.button}>Github</a>
            <a href="#" className={styles.button}>Resume</a>
            </div>
        </div>
    )
}

export default WhoAmI;