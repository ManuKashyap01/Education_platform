import React from 'react'
import { SlideLeft } from '../Services/Services'
import BannerImg from '../../assets/join_us_image.jpg'
import { FadeUp } from '../Hero/Hero'
import { motion } from 'framer-motion'
import { SlideRight } from './Banner'

const Banner2 = () => {
  return (
    <section id='our_team'>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* Content */}
            <motion.div 
                variants={SlideRight(0.2)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}
                className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <h1 className='text-4xl font-bold !leading-snug'>Join Our Community to Start your coding Journey</h1>
                    <p className='text-dark2'>Join our community and embark on your coding journey! Gain access to resources, mentorship, and a supportive environment to learn, grow, and build the skills you need for success in tech.</p>
                    <a className='primary-btn !mt-8' href="">Join Now</a>
                </div>
            </motion.div>
            {/* Image */}
            <div className="flex justify-center items-center">
                <motion.img
                    variants={SlideLeft(0.2)}
                    initial='initial'
                    whileInView={'animate'}
                    viewport={{once:true}}
                    src={BannerImg} className='w-[300px] lg:w-[350px] xl:w-[450px] object-cover rounded-lg drop-shadow relative z-10' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Banner2