import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <>
      <div className='w-full h-full flex flex-row justify-center items-center pb-20 pt-10'>
        <div className="w-[60vw] mx-auto">
          <motion.div className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <motion.div className="image w-1/5 mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className='w-full' alt="" />
            </motion.div>
            <motion.h1 className='text-white mb-5 text-[1.2vw] text-center w-[40vw] mx-auto'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* {t('One digital environment to serve pilgrims')} */}
              تعرف على إستراتيجية التحول الرقمي  <br />لخدمة ضيوف الرحمن
            </motion.h1>
            <div className="grid grid-rows-2 grid-flow-col gap-5">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.8, } }}
                class="transition-all p-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/accessing-housing'}>
                  <div class="py-2 px-3 relative">
                    <div className="image w-[10vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/asset_4.png'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <p class="mt-6 text-[0.8vw] text-white">
                      {/* {t('Learn about the digital transformation to serve the guests of God')} */}
                      التحول الرقمي لإثراء تجربة ضيوف الرحمن
                    </p>
                    <h3 class="mt-3 text-[1vw] font-bold text-main">
                      {/* {t('Enriching the pilgrim’s experience in accessing housing')} */}
                      إثراء تجربة الحاج في الوصول للسكن
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.8, } }}
                class="transition-all p-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/digital-services'}>
                  <div class="py-2 px-3 relative">
                    <div className="image w-[10vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/asset_2.png'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <p class="mt-6 text-[0.8vw] text-white">
                      {/* {t("Digital transformation to develop planning, governance and control mechanisms")} */}
                      التحول الرقمي لتطوير آليات التخطيط والرقابة
                    </p>
                    <h3 class="mt-3 text-[1vw] font-bold text-main">
                      {/* {t("Enriching the pilgrim's experience in accessing housing")} */}
                      رقابة رقمية لتحسين خدمات الحجاج
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <div className="grid grid-row-subgrid gap-4 row-span-3 justify-self-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8, } }}
                  class="row-start-2 h-fit transition-all p-4 relative z-40 w-[20vw] text-center"
                >
                  <Link to={'/digital-infrastructure'}
                    onClick={handleClick}
                  >
                    <div class="py-2 px-3 relative">
                      <div className="image w-[18vw] mx-auto">
                        <motion.img src={process.env.PUBLIC_URL + '/images/main/asset_1.png'} className='w-full' alt=""
                          whileTap={{ scale: 1.1 }}
                        />
                      </div>
                      <motion.p class="mt-6 text-[0.8vw] mb-1 text-white"
                        animate={{ opacity: isClicked ? 0 : 1 }}
                      >
                        {/* {t("Digital infrastructure development")} */}
                        تطوير البنية التحتية الرقمية
                      </motion.p>
                      <motion.h2 class="mt-3 text-[1vw] font-bold text-main"
                        animate={{ opacity: isClicked ? 0 : 1 }}
                      >
                        {/* {t("One digital environment to serve pilgrims")} */}
                        بيئة رقمية واحدة لخدمة الحجاج
                      </motion.h2>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.8, } }}
                class="transition-all p-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/developing-subsistence'}>
                  <div class="py-2 px-3 relative">
                    <div className="image w-[10vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/asset_3.png'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <p class="mt-6 text-[0.8vw] text-white">
                      {/* {t('Digital transformation to improve the quality of services provided to the pilgrims')} */}
                      التحول الرقمي لتطوير جودة الخدمات
                    </p>
                    <h3 class="mt-3 text-[1vw] font-bold text-main">
                      {/* {t('One digital environment to serve pilgrims')} */}
                      تطوير خدمات الإعاشة الحجاج
                    </h3>
                  </div>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.8, } }}
                class="transition-all p-4 relative z-40 w-[20vw] text-center justify-self-center"
              >
                <Link to={'/developing-accommodation'}>
                  <div class="py-2 px-3 relative">
                    <div className="image w-[10vw] mx-auto">
                      <motion.img src={process.env.PUBLIC_URL + '/images/main/asset_5.png'} className='w-full' alt=""
                        whileTap={{ scale: 1.1 }}
                      />
                    </div>
                    <p class="mt-6 text-[0.8vw] text-white">
                      {/* {t("Digital transformation to develop the pilgrims' accommodation service")} */}
                      التحول الرقمي لتطوير خدمة تسكين الحجاج
                    </p>
                    <h3 class="mt-3 text-[1vw] font-bold text-main">
                      {/* {t("One digital environment to serve pilgrims")} */}
                      تطوير خدمة تسكين الحجاج
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
    </>
  )
}

export default Home