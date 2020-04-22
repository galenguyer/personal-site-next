import Header from '../../components/header';
import styles from '../../styles/genericbot.module.css';

export default () => {
    return (
        <div id='container'>
            <Header />
            <div id='body' className={styles.container}>
                <h3 className={styles.header}>Databases</h3>
                <p>In the 2 years GenericBot has existed, I've used three different databases as requirements have changed and the bot has scaled. When I started writing it, data was stored in json files, one per server the bot was on.</p>
                <p>This worked fine when only a handlful of people used it, but then I started running into issues with concurrent file IO that culminated in data loss. I quickly moved it to <a href="https://www.litedb.org/">LiteDB</a>, an embedded NoSQL database, which solved my concurrency issues and had the benefit of easy password protection. LiteDB is a small project, however, and there aren't many tools for managing it. After a few months of using LiteDB, I started looking for a more powerful alternative.</p>
                <p>After some searching, I settled on <a href="https://www.mongodb.com/">MongoDB.</a> It's very popular and well-supported, with many of the same features of LiteDB, but with more management tools and features.</p>
                <p>One side effect of the multiple databases I've used is a lack of a single clear way of working with the database. Prior to the rewrite, different componenets talked to the database in their own ways. When re-writing it, I implemented a <code>Core</code> module that all database operations had to go though. This prevents code repetition and makes it easy to change anything about the rest of the database without the rest of the code being affected.</p>
                
                <h3 className={styles.header}>Command Context</h3>
                <p>Information about the current command is passed into the execution method. Previously, the global client, the message object, and an array of parameters were passed into the command. With the new <code>Context</code> object, a single object is provided, to improve readability and ease of use.</p>
                <p>The Context provides the same message object and the array of parameters, but also provides the entire parameter string. Some commands manipulated that string, but previously it had to be either extracted from the message manually within the command or reconstructed from the parameter array, which was easier but didn't preserve newlines or irregular spacing. The global client is now accesible through the Core, ensuring there is only one static instance, instead of passing around references.</p>
                
                <h3 className={styles.header}>Location-Agnostic Execution</h3>
                <p>The previous model for command execution relied on the server the command was being run in to determine some prerequisites. Rewriting it allowed me to remove these dependencies so some commands can now be run in direct messages. Commands that can't be run in DMs for other reasons are caught before exection to prevent exceptions being thrown.</p>
                
                <h3 className={styles.header}>Exception Handling</h3>
                <p>All exceptions are caught and reported, similarly to how <a href="https://sentry.io/welcome/">Sentry</a> works. The stack traces and reports are stored in the bot's database and checked every time a new exception is reported. If the same exception is seen five times, an issue is opened in Github for me to address.</p>
            </div>
        </div>
    )
}