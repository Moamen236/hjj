import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InactivityDetector from './Shared/InactivityDetector';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Home = ({ t }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <InactivityDetector>
      <video src={process.env.PUBLIC_URL + "/images/intro-overlay.mp4"} autoPlay loop muted className="absolute top-0 left-0 -z-10 w-full">
        <source src={process.env.PUBLIC_URL + "/images/intro-overlay.mp4"} type="video/mp4" />
      </video>
      <div className='w-full h-screen flex flex-row justify-center items-center pb-[1vw] pt-[2vw]'>
        <div className="w-[65vw] mx-auto">
          <motion.div className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <motion.div className="image w-1/4 mx-auto mb-[1.5vw]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className='w-full' alt="" />
            </motion.div>
            <motion.h1 className='text-white text-[1.2vw] text-center w-[40vw] mx-auto'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              تعرف على إستراتيجية التحول الرقمي  <br />لخدمة ضيوف الرحمن
            </motion.h1>
            <div className="grid grid-rows-2 grid-flow-col gap-5">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.8, } }}
                className="transition-all px-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/accessing-housing'}>
                  <div className="py-2 px-3 relative">
                    <div className="image w-[15vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/1.gif'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <h3 className="mt-3 text-[1vw] font-bold text-main">
                      {t('home_accessing_housing_title')}
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.8, } }}
                className="transition-all px-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/digital-services'}>
                  <div className="py-2 px-3 relative">
                    <div className="image w-[15vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/2.gif'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <h3 className="mt-3 text-[1vw] font-bold text-main">
                      {t('home_digital_services_title')}
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <div className="grid grid-row-subgrid gap-4 row-span-3 justify-self-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8, } }}
                  className="row-start-2 h-fit transition-all px-4 relative z-40 w-[22vw] text-center"
                >
                  <Link to={'/digital-infrastructure'}
                    onClick={handleClick}
                  >
                    <div className="py-2 px-3 relative">
                      <div className="image w-[20vw] mx-auto">
                        <motion.img src={process.env.PUBLIC_URL + '/images/main/3.gif'} className='w-full' alt=""
                          whileTap={{ scale: 1.1 }}
                        />
                      </div>
                      <h3 className="mt-3 text-[1vw] font-bold text-main"
                        animate={{ opacity: 1 }}
                      >
                        {t('home_digital_infrastructure_title')}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.8, } }}
                className="transition-all px-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/developing-subsistence'}>
                  <div className="py-2 px-3 relative">
                    <div className="image w-[15vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/4.gif'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <h3 className="mt-3 text-[1vw] font-bold text-main">
                      {t('home_developing_subsistence_title')}
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.8, } }}
                className="transition-all px-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/developing-accommodation'}>
                  <div className="py-2 px-3 relative">
                    <div className="image w-[15vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/5.gif'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <h3 className="mt-3 text-[1vw] font-bold text-main">
                      {t('home_developing_accommodation_title')}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
    </InactivityDetector>
  )
}

export default Home