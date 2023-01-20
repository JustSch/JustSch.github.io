import Home from './home';
import Head from 'next/head';

function App() {
  return (
    <div>
      <Head>
        <title>Justin Schreiber's Portfolio</title>
        <meta property="og:title" content="Justin Schreiber's Portfolio" />
        <meta property="og:description" content="An Aspiring Software Engineer" />
        <meta property="og:url" content="https://JustSch.github.io" />
        <meta property="og:image" content="/img/profile.jpeg" />
      </Head>
      <Home />
    </div>

  );
}

export default App;
