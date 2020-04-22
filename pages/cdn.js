import Header from '../components/header';
import styles from '../styles/project.module.css';

export default () => {
    return (
        <div id='container'>
            <Header />
            <div id='body' className={styles.container}>
                <h3 className={styles.header}>Inspiration</h3>
                <p>Why did I do this? Well, I read <a href="https://pasztor.at/blog/building-your-own-cdn">this article</a> and thought it looked neat. Then, a friend built one, following that blog. I had $150 per month in Azure credit from interning at Microsoft, so I decided to replicate it in Azure.</p>
                
                <h3 className={styles.header}>Architecture</h3>
                <p>The CDN consists of five nodes. The Master server is located at RIT and is not reachable though the CDN. It servers as a coordinator for the edge nodes. The edge nodes are Standard B1s Virtual Machines with 1 vCPU, 1GB of RAM, and 32GB of SSD storage located in the West US 2, East US 2, UK South, and SouthEast Asia regions.</p>
                <p>Files are distributed automatically over SFTP with the help of a bash script that is registered as a systemd service. The script uses <code>inotifywait</code> to check for file changes, and <code>rsync</code> to send all changes to edge nodes.</p>
                <p>A <a href="https://azure.microsoft.com/en-us/services/traffic-manager/">Traffic Manager</a> configured to route based off geographic location ensures users get the nearest server, and handles failover in the event a server goes down.</p>
            
                <h3 className={styles.header}>Speed</h3>
                <p>I tested the CDN with <a href="https://latency.apex.sh/?url=cdn.galenguyer.com&compare=elite.tips">apex.sh's latency tester.</a> <a href="https://elite.tips">elite.tips</a> is backed by cloudflare, and my CDN is comparable in most regions. For a system that I built for fun, I'm very happy with that.</p>
            </div>
        </div>
    )
}