import React from 'react'
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import styles from './contact.module.css'
import Hero from '../components/Hero/hero';

const Contact = () => {
  return (
    <div>
      <Header/>
      <Hero/>
        <h1 className={styles.h1}>
            Contact Us Now
        </h1>
      <p className={styles.p1}>
        Contact us for making user-friendly and attractive websites.
         </p>
      <Footer/>
    </div>
  )
}

export default Contact;
