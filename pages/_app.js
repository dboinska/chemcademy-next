import { GlobalStyles } from '../styles/globals';
import MainLayout from '../src/layouts/Main.layout';

import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <MainLayout navbar={<Navbar />} footer={<Footer />}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
