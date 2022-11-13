import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps, children }) {
  return <Component {...pageProps} {...children} />
}

export default MyApp
