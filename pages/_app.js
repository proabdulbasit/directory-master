import '@/styles/globals.css'
import { useEffect } from 'react';
import { setupAnalytics } from "../analytics"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setupAnalytics();
  }, []);
  return<Component {...pageProps} />
  
}