import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section>
       <h1 className={styles.head}>MMJ Dairies</h1> 
      <p className={styles.hero}>
      Looking for best quality milk and dairy products? We fulfill your criteria by producing high quality products in a hygenic environment! State-of-the art facilities and customer friendly environment attracts buyers from nearby areas. Located on the main road, the shop is visible and beats  every dairy shop of the area.
      </p>
    </section>
  )
}

export default Hero;
