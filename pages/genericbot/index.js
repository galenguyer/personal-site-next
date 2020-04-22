import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import styles from '../../styles/project.module.css';

export default () => (
  <div id='container'>
    <Head>
      <title>Galen Guyer | GenericBot</title>
      <meta name="description" content="GenericBot is a Discord bot I wrote as a fun project that has grown far bigger than I ever expected. It aims to provide an almost full featured moderation and fun box experience in one convenient package" />
    </Head>
    <Header />
    <div id='body' className={styles.container}>
        <h3 className={styles.header}>Hosting</h3>
        <p>GenericBot is hosted on my personal server, which is hosted by <a href="https://csh.rit.edu">Computer Science House</a>, who provides power and gigabit ethernet. The server has two Intel Xeon X5650 CPUs, giving it a total of 12 cores and 24 threads. It currently has 32GB DDR3 ECC RAM, with space for up to 144GB. 6 of the 12 hard drive bays are populated with 3TB Seagate Constellation ES.2 7.2K SAS drives in a hardware-configured RAID6, providing two-drive failure tolerance and 12TB of usable space</p>
        <h3 className={styles.header}>Database</h3>
        <p>GenericBot is backed by <a href="https://www.mongodb.com/">MongoDB</a>, a popular NoSQL document store. Data is password-protected and not accessible from the internet. MongoDB exposes itself on a non-standard port and only allows connections from the local subnet to prevent remote attacks.</p>
        <h3 className={styles.header}>Links</h3>
        <p>GenericBot is, and always will be, free to use. To invite it, click <a href="https://discordapp.com/oauth2/authorize?client_id=295329346590343168&scope=bot&permissions=2110258303">here</a>
        <br />
        Also, the source code is public on <a href="https://github.com/MasterChief-John-117/GenericBot">github</a>. You can also open bug reports on GitHub</p>
        <h3 className={styles.header}>Self Assignable Roles</h3>
        <p>One of the most common public features GenericBot is used for is roles a user can assign to themself. To see all the available roles, do &gt;userroles. You can join a role with <code>&gt;iam [rolename]</code> or leave a role with <code>&gt;iamnot [rolename]</code>.</p>
        <h3 className={styles.header}>Moderation</h3>
        <p>GenericBot provides a wide range of tools for moderators to track users and infractions. It keeps track of all of a user's usernames, nicknames, and logged infractions, including kicks and timed or permanent bans. Users can be searched for either by ID, or by username or nickname, whether it be current or an old name. (All data is stored in an encrypted database, and data from one server is completely inaccessible by another server)</p>
        <h3 className={styles.header}>Fun!</h3>
        <p>In addition to being a highly effective moderator toolkit, GenericBot has some fun commands, such as <code>&gt;dog</code>, <code>&gt;cat</code>, or <code>&gt;jeff</code>. You can also create your own custom commands for rapid-fire memery or whatever else tickles your fancy</p>
        <h3 className={styles.header}>v3 Rewrite</h3>
        <p>I recently re-wrote the bot to improve maintinability and performance. Read more about there <Link href="/genericbot/v3">here!</Link></p>
    </div>
  </div>
)