import '../styles/globals.css';
import Head from 'next/head';
import Menu from '../components/Menu';
import Home from '../components/Home';
import About from '../components/About';
import Shop from '../components/Shop';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default App;
