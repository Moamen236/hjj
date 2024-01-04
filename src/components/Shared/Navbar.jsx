import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Navbar = ({ t, i18n }) => {
  const lang = i18n.language;
  return (
    <nav>
      <div className="nav flex flex-col justify-center items-center">
        <div className="home">
          <Link to={'/home'}>
            <motion.span className={`fixed top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} z-50 bg-main p-[0.6vw] flex justify-center items-center`}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" className='w-[2vw]' />
            </motion.span>
          </Link>
          <Link to={'/'}>
            <motion.span className={`fixed top-0 ${lang === 'ar' ? 'left-20' : 'right-20'} z-50 bg-main p-[0.7vw] flex justify-center items-center`}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 6.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <i class="fa-solid fa-earth-asia text-[2vw]"></i>
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar