import React from 'react'
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import styles from './about.module.css'
import Hero from '../components/Hero/hero';

const About = () => {
  return (
    <div>
      <Header/>
      <Hero/>
        <h1 className={styles.h1}>
            About Us
        </h1>
      <p className={styles.p1}>
      We are beginning our journey as developers and we are so thrilled about it. We may encounter some challenges but we are resilient and determined to overcome them by putting our heart and soul into our work.
      </p>
      <Footer/>
    </div>
  )
}

export default About;
