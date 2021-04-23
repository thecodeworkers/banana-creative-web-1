import withRedux from 'next-redux-wrapper';
import { wrapper } from '../store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);
