import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ t, i18n }) => {
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <nav className='fixed top-[50%] translate-y-[-50%] left-5 z-50'>
      <div className="nav flex flex-col justify-center items-center">
        <div className="home mb-20">
          <Link to={'/'}
            className="text-white hover:text-main"
          >
            <i className='fa-solid fa-house fa-2xl'></i>
          </Link>
        </div>
        <div className="language">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-placement="right" class="text-white hover:text-main" type="button">
            <i className='fa-solid fa-globe fa-2xl'></i>
          </button>

          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
              <li class="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('ar')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/ar.png'} alt="Arabic" className='w-6 h-4' />
                <strong className='text-black mx-4'>Arabic</strong>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('en')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/en.png'} alt="English" className='w-6 h-4' />
                <strong className='text-black mx-4'>English</strong>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
                onClick={() => handleChangeLanguage('fr')}
              >
                <img src={process.env.PUBLIC_URL + '/images/flags/fr.png'} alt="French" className='w-6 h-4' />
                <strong className='text-black mx-4'>French</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar