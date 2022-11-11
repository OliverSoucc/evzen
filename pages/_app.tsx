import '../styles/globals.css';
import 'swiper/css';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/common';
import Footer from '../components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
