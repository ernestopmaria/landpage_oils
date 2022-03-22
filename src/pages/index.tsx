import type { NextPage } from 'next'
import styles from './home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Products } from '../components/Products'
import { Header } from '../components/Header'
import { Services } from '../components/OurServices'
import { Services1 } from '../components/OurServices1'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Essentials</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.headerTitulo}>
          <h1>O lugar ideal para cuidar da sua beleza.</h1>
          </div>
        </div>
        <div className={styles.content}>
          <Products/>
          <div className={styles.titulo}>
              Nossos Serviços
          </div>  

          <Services/>
          <Services1/>  
            
          
          </div>      

  
       
        
      </div>
      </div>


  )
}

export default Home
