import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { FadeUp } from '../Hero/Hero'
const Footer = () => {
  return (
    <footer id='footer' className='py-28 bg-light'>
        <motion.div 
            variants={FadeUp(0.3)}
            initial='initial'
            whileInView={'animate'}
            viewport={{once:true}}
            className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* First section */}
                <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">
                        The coding journey
                    </h1>
                    <p className="text-dark">
                        CodeQuest is a platform designed for coders at any level. With interactive courses, hands-on projects, and real-world challenges, you’ll gain practical skills and track your progress as you grow. Join a vibrant community of learners and mentors, and take your coding skills to the next level!
                    </p>
                </div>
                {/* Second section */}
                <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Courses</h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Web Development
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Software Development
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    App Development
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    E - Learning
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Links</h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Home
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Services
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    About
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Third section */}
                <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">Get in Touch</h1>
                    <div className="flex items-center">
                        <input type="text" placeholder='Enter your Email' className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" />
                        <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                    </div>
                    {/* social icons */}
                    <div className="flex space-x-6 text-xl py-3">
                        <a href="#">
                            <FaWhatsapp className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaInstagram className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <TbWorldWww className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaYoutube className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer