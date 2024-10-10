import React from 'react'
import { motion } from 'framer-motion';
import { IoMdMenu } from "react-icons/io";

const navbarMenu=[
    {
        id:1,
        title:'Home',
        path:'/'
    },{
        id:2,
        title:'Services',
        path:'#'
    },{
        id:3,
        title:'About Us',
        path:'#'
    },{
        id:4,
        title:'Our Team',
        path:'#'
    },{
        id:5,
        title:'Contact Us',
        path:'#'
    },
]
const Navbar = () => {
  return (
    <nav>
        <motion.div 
            initial={{
                opacity:0,
                y:-50
            }}
            animate={{
                opacity:1,
                y:0
            }}
            className="container py-10 flex justify-between items-center">
            {/* logo section */}
            <div>
                <h1 className="font-bold text-2xl">
                    The Coding Journey
                </h1>
            </div>
            {/* nav section */}
            <div className="hidden lg:block">
                <ul className='flex items-center gap-3'>
                    {navbarMenu.map((item)=>{
                        return <li key={item.id}>
                            <a 
                                className='inline-block py-2 px-3 hover:text-secondary relative group' 
                                href={item.path}
                            >
                                {item.title}
                            </a>
                        </li>
                    })}
                    <button className="primary-btn">Sign in</button>
                </ul>
            </div>
            {/* mobile menu section */}
            <div className="lg:hidden">
                <IoMdMenu className='text-4xl'/>
            </div>
        </motion.div>
    </nav>
  )
}

export default Navbar