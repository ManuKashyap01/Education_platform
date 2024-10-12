import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import AnchorLink from "react-anchor-link-smooth-scroll";
const navbarMenu = [
  {
    id: 1,
    title: 'Home',
    path: '#hero',
  },
  {
    id: 2,
    title: 'Services',
    path: '#services',
  },
  {
    id: 3,
    title: 'About Us',
    path: '#about_us',
  },
  {
    id: 4,
    title: 'Our Team',
    path: '#our_team',
  },
  {
    id: 5,
    title: 'Contact Us',
    path: '#contact_us',
  },
];

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
        setMobileMenuActive(false);
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* nav section for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {navbarMenu.map((item) => (
              <li key={item.id}>
                <AnchorLink
                    href={item.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {item.title}
                </AnchorLink>
              </li>
            ))}
            <button className="primary-btn">Sign in</button>
          </ul>
        </div>
        {/* mobile menu icon */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" onClick={toggleMobileMenu} />
        </div>
      </motion.div>

      {/* mobile menu section */}
      <AnimatePresence>
        {mobileMenuActive && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{opacity:0,x:-50}}
            transition={{duration:0.5, ease:'easeInOut'}}
            className="lg:hidden absolute top-0 left-0 w-full pt-[2vh] min-h-[50vh] bg-secondary shadow-lg z-40"
          >
              <IoMdClose className="text-4xl absolute z-50 top-9 right-3" onClick={toggleMobileMenu} />
            <ul className="flex flex-col items-center gap-3 p-5">
              {navbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="block py-2 px-3 hover:text-primary"
                    href={item.path}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
