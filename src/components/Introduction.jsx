import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Introduction = ({ i18n }) => {
  const navigation = useNavigate();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  const [video, setVideo] = useState('/images/intro-overlay.mp4')

  const [cardElements, setCardElements] = useState([]);
  const [logoElement, setLogoElement] = useState();
  useEffect(() => {
    setCardElements(document.getElementsByClassName('card'));
    setLogoElement(document.getElementById('logo'));
  })
  const handleClick = (lang, url) => {
    setVideo('/images/intro-2.mp4')
    handleChangeLanguage(lang)
    logoElement.classList.add('hidden');
    for (let i = 0; i < cardElements.length; i++) {
      cardElements[i].classList.add('hidden');
    }
    setTimeout(() => {
      navigation(url)
    }, 6000)
  }

  useEffect(() => {
    if (window.location.pathname === '/home') {
      document.getElementById('bg-video').classList.add('hidden');
    }
  }, [window.location.pathname]);

  return (
    <>
      <video id="bg-video" src={process.env.PUBLIC_URL + "/images/intro-overlay.mp4"} autoPlay loop muted className="absolute top-0 left-0 z-10 w-full">
        <source src={process.env.PUBLIC_URL + "/images/intro-overlay.mp4"} type="video/mp4" />
      </video>
      <motion.video src={process.env.PUBLIC_URL + video} autoPlay loop muted className="absolute top-0 left-0 z-20 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <source src={process.env.PUBLIC_URL + video} type="video/mp4" />
      </motion.video>
      <div className='w-full h-screen flex flex-row justify-center items-center pb-20 pt-10 introduction'>
        <div className="w-[65vw] mx-auto z-50">
          <motion.div id='logo' className="image w-1/4 mx-auto mb-[1.5vw]"
            initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 1.2 } }}
          >
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className='w-full' alt="" />
          </motion.div>
          <div className="grid grid-rows-2 grid-flow-col gap-5 mt-4">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1.2 } }}
              className="transition-all p-4 relative z-40 w-[22vw] text-center flex justify-center items-center card">
              <a href="/#" className='py-12'
                onClick={() => handleClick('ar', '/home')}
              >
                <div className="p-5">
                  <img src={process.env.PUBLIC_URL + '/images/flags/ar.png'} className="w-[4vw] mx-auto" alt="" />
                  <h3 className="mt-3 text-[1vw] font-bold text-white pt-5 mb-5">
                    تعرف على استراتيجية التحول الرقمي في تجربة الحاج
                  </h3>
                  <strong className='text-main font-bold text-[1vw]'>ابدأ هنا</strong>
                </div>
              </a>
            </motion.div>
            <div className="grid grid-row-subgrid row-span-2 justify-self-center items-end">
              <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1.2 } }}
                className="transition-all p-4 relative z-40 w-[22vw] text-center flex justify-center items-center card">
                <a href="/#" className='py-12'
                  onClick={() => handleClick('fr', '/home')}
                >
                  <div className="p-2">
                    <img src={process.env.PUBLIC_URL + '/images/flags/fr.png'} className="w-[4vw] mx-auto" alt="" />
                    <h3 className="mt-3 text-[1vw] font-bold text-white pt-5 mb-5">
                      Découvrez la stratégie de transformation numérique dans l'expérience du pèlerin
                    </h3>
                    <strong className='text-main font-bold text-[1vw]'>Commencer Ici</strong>
                  </div>
                </a>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0, transition: { delay: 1.3, duration: 1.2 } }}
              className="transition-all p-4 relative z-40 w-[22vw] text-center flex justify-center items-center card">
              <motion.a href="/#" className='py-10'
                onClick={() => handleClick('en', '/home')}
              >
                <div className="">
                  <img src={process.env.PUBLIC_URL + '/images/flags/en.png'} className="w-[4vw] mx-auto" alt="" />
                  <h3 className="mt-3 text-[1vw] font-bold text-white pt-5 mb-5">
                    Learn about Digital Transformation strategy in the pilgrim's experience
                  </h3>
                  <strong className='text-main font-bold text-[1vw]'>Start Here</strong>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className='slide-in'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className='slide-out'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default Introduction