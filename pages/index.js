import Head from 'next/head';
import Header from '../components/header';
import WhoAmI from '../components/whoami';

export default () => (
  <div id='container'>
    <Head>
      <title>Galen Guyer | Portfolio</title>
      <meta name="description" content="Galen Guyer is a Backend Software Engineer currently studying at the Rochester Institute of Technology. Galen has also interned at Microsoft twice, over the summers of 2018 and 2019. This website is a portfolio of his work experience and projects" />    </Head>
    <Header />
    <div id='body'>
    <WhoAmI />
    </div>
  </div>
)
