import React from 'react'
import BannerImg from '../../assets/about_us_image.jpg'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { FadeUp } from '../Hero/Hero'
import { motion } from 'framer-motion'

export const SlideRight = (delay) =>{
    return {
        initial:{
            x:-50,
            opacity:0
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duraration:0.5,
                delay:delay,
                ease:'easeInOut'
            }
        }
    }
}
const Banner = () => {
  return (
    <section id='about_us' className='bg-light'>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* Image */}
            <div className="flex justify-center items-center">
                <motion.img
                    variants={SlideRight(0.2)}
                    initial='initial'
                    whileInView={'animate'}
                    viewport={{once:true}}
                    src={BannerImg} className='w-[200px] lg:w-[250px] xl:w-[350px] object-cover rounded-lg -drop-shadow relative z-10' alt="" />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-12">
                    <motion.h1 
                        initial={{opacity:0,scale:0.25}}
                        whileInView={{opacity:1,scale:1}}
                        viewport={{once:true}}
                        transition={{duration:0.5,delay:0.2}}
                        className="text-3xl md:text-4xl font-bold !leading-snug">
                        The World's Leading Online Learning Platform
                    </motion.h1>
                    <div className='flex flex-col gap-6'>
                        <motion.div 
                            variants={FadeUp(0.2)}
                            initial="initial"
                            whileInView={'animate'}
                            viewport={{once:true}}
                            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-xl'>
                            <FaBookReader className='text-2xl'/>
                            <p className="text-lg">10,000+ Courses</p>
                        </motion.div>
                        <motion.div 
                            variants={FadeUp(0.3)}
                            initial="initial"
                            whileInView={'animate'}
                            viewport={{once:true}}
                            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-xl'>
                            <GrUserExpert className='text-2xl'/>
                            <p className="text-lg">Expert Instruction</p>
                        </motion.div>
                        <motion.div 
                            variants={FadeUp(0.4)}
                            initial="initial"
                            whileInView={'animate'}
                            viewport={{once:true}}
                            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-xl'>
                            <MdOutlineAccessTime className='text-2xl'/>
                            <p className="text-lg">Lifetime Access</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner