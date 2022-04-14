import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/pexels-nathan-cowley-1192671.jpg'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animations'

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
        <Header />
        <Hero 
          image={Image}
          title='Look at this flower'
          desc='The nature ' 
        />
    </motion.div>
  )
}

export default Home