import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section>
       <h1 className={styles.head}>My First Website</h1> 
      <p className={styles.hero}>
      This website showcases the efforts and dedication that we are doing to make ourselves an asset in the world of developers. Still there is much to do and we shall continue our journey with the same zest and zeal!
      </p>
    </section>
  )
}

export default Hero;
