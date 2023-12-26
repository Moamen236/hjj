import React from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Home = ({ t }) => {
  return (
    <>
      <div className='w-full h-screen flex flex-row justify-center items-center text-center'>
        <div className="container mx-auto">
          <motion.div className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <motion.h1 className='text-white mb-15 text-[3vw] mb-20'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('Digital Transformation')}
            </motion.h1>
            <div className="grid grid-cols-5 gap-4">
              <motion.div initial={{ y: 600 }} animate={{ y: 0, transition: { delay: 0.1, duration: 0.6, } }}>
                <Link to={'/page'}>
                  <Card className=' h-full hover:scale-105 border-0 hover:bg-blue-900 transition-all ease-in-out duration-300'>
                    <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                      {t('Enrich the experience of the pilgrims')}
                    </h5>
                  </Card>
                </Link>
              </motion.div>
              <motion.div initial={{ y: 600 }} animate={{ y: 0, transition: { delay: 0.2, duration: 0.6, } }}>
                <Link to={'/page'}>
                  <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                    <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                      {t('Develop planning, governance and control mechanisms')}
                    </h5>
                  </Card>
                </Link>
              </motion.div>
              <motion.div initial={{ y: 600 }} animate={{ y: 0, transition: { delay: 0.3, duration: 0.6, } }}>
                <Link to={'/page'}>
                  <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                    <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                      {t('Digital infrastructure development')}
                    </h5>
                  </Card>
                </Link>
              </motion.div>
              <motion.div initial={{ y: 600 }} animate={{ y: 0, transition: { delay: 0.4, duration: 0.6, } }}>
                <Link to={'/page'}>
                  <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                    <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                      {t('Improve the quality of services provided to the pilgrims')}
                    </h5>
                  </Card>
                </Link>
              </motion.div>
              <motion.div initial={{ y: 600 }} animate={{ y: 0, transition: { delay: 0.5, duration: 0.6, } }}>
                <Link to={'/page'}>
                  <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                    <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                      {t("Develop the pilgrims' accommodation services")}
                    </h5>
                  </Card>
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