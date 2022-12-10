import '../styles/globals.css'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import Login from './Login'


function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />

}

export default MyApp
