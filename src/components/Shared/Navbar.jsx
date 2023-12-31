import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Navbar = ({ t, i18n }) => {
  const lang = i18n.language;
  return (
    <nav className={`fixed top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} z-50 bg-main p-5 flex justify-center items-center`}>
      <div className="nav flex flex-col justify-center items-center">
        <motion.div className="home"
          whileTap={{ scale: 0.9 }}
        >
          <Link to={'/home'}
            className="text-white hover:text-main"
          >
            {/* <i className='fa-solid fa-house text-[1.2vw]'></i> */}
            <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" className='w-[2vw]'/>
          </Link>
        </motion.div>
        {/* <div className="language">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-placement="right" className="text-white hover:text-main" type="button">
            <i className='fa-solid fa-globe fa-2xl'></i>
          </button>

          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
              <li className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('ar')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/ar.png'} alt="Arabic" className='w-6 h-4' />
                <strong className='text-black mx-4'>Arabic</strong>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('en')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/en.png'} alt="English" className='w-6 h-4' />
                <strong className='text-black mx-4'>English</strong>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('fr')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/fr.png'} alt="French" className='w-6 h-4' />
                <strong className='text-black mx-4'>French</strong>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar