import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Information } from '../components/Information'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <Information/>
  <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
