import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ t, i18n }) => {
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <nav className='fixed top-10 left-0 w-full z-50'>
      <div className="xl:container mx-auto">
        <div className="nav flex flex-row justify-between align-center">
          <div className="home">
            <Link to={'/'}>{t('Home')} <FontAwesomeIcon icon="fa-solid fa-house" /></Link>
          </div>
          <div className="language">
            <Dropdown label={t('Language')} inline>
              <Dropdown.Item onClick={() => handleChangeLanguage('ar')}>Arabic</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeLanguage('en')}>English</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeLanguage('fr')}>French</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar