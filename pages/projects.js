import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/project.module.css';

export default () => {
    return (
        <div id='container'>
            <Head>
                <title>Galen Guyer | Projects</title>
                <meta name="description" content="I do way too many side projects. Some of them are even useful! But most aren't. I do try to learn from them, and these write-ups are my way of sharing that." />
            </Head>
            <Header />
            <div id='body' className={styles.container}>
                <h3 className={styles.header}>Coming Soon!</h3>
            </div>
        </div>
    )
}