import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/pexels-eberhard-grossgasteiger-572897.jpg'
import { motion } from 'framer-motion'
import { animationThree } from '../animations'

const Services = () => {
  return (
    <motion.div 
      initial='out'
      animate='end'
      exit='out'
      variants={animationThree}
    >
        <Header />
        <Hero 
          image={Image}
          title='Experience Nature'
          desc='Once in a lifetime' 
        />
    </motion.div>
  )
}

export default Services