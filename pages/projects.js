import Header from '../components/header';
import styles from '../styles/project.module.css';

export default () => {
    return (
        <div id='container'>
            <Header />
            <div id='body' className={styles.container}>
                <h3 className={styles.header}>Coming Soon!</h3>
            </div>
        </div>
    )
}