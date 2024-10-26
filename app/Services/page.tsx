import React from 'react'
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import styles from './services.module.css'
import Hero from '../components/Hero/hero';

const Service = () => {
  return (
    <div>
      <Header/>
      <Hero/>
        <h1 className={styles.h1}>
            Services
        </h1>
      <p className={styles.p1}>
        Just getting started! I'm excited to share that I've recently embarked on my career as a developer and I'm looking forward to learning, growing and serving clients.
         </p>
      <Footer/>
    </div>
  )
}

export default Service;
