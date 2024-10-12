import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroImg from '../../assets/hero_image.jpeg'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'

export const FadeUp = (delay)=>{
  return {
    initial:{
      opacity:0,
      y:50
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        delay:delay,
        type:'spring',
        stiffness:100,
        ease:'easeInOut'
      }
    }
  }
}
const Hero = () => {
  return (
    <section id='hero' className="bg-light overflow-hidden relative">
        <Navbar/>
        <div className="container pb-10 md:pb-0 grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Hero section info */}
          <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
             variants={FadeUp(0.6)}
             initial='initial'
             animate='animate'
             className='text-3xl lg:text-5xl font-bold !leading-snug'>
              Let's Learn to build a <span className='text-secondary'>Website</span> for your business
            </motion.h1>
            <div className="flex justify-center md:justify-start">
              <motion.button 
                variants={FadeUp(0.8)}
                initial='initial'
                animate='animate'
                className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300'/>
              </motion.button>
            </div>
            </div>
          </div>
          {/* Hero section image */}
          <div className='flex justify-center items-center'>
            <motion.img
            initial={{
              opacity:0,
              x:50
            }}
            animate={{
              opacity:1,
              x:0,
              transition:{
                duration:0.5,
                delay:0.6,
                ease:'easeInOut'
              }
            }} 
            src={HeroImg} alt="" className='w-[250px] lg:w-[300px] xl:w-[400px] rounded-lg drop-shadow relative z-10'/>
          </div>
        </div>
    </section>
  )
}

export default Hero