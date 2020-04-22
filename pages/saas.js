import fetch from 'node-fetch';
import styles from '../styles/saas.module.css';

function SaaS ({ data }) {
    var lines = []
    data.split('\n').forEach(function(item){
        if (item.replace(/\s/g,'').length > 0)
            lines.push(item)
    });
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{lines[Math.floor(Math.random()*lines.length)]}</h1>
                <div className={styles.inner}>
                <h5>An Ephemeral, Sad Song by Sufjan (as a Service) Stevens</h5>
                <hr />
                {lines.map((line) => {
                    return (<p className={styles.lyrics}>{line}</p>)
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch("https://galenguyer.com/api/sufjan");
    const data = await res.text();

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default SaaS;
