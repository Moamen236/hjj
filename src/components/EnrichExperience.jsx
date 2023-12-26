import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const EnrichExperience = ({ t }) => {
    return (
        <>
            <motion.div className="w-full h-full"
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <div className="content pt-32">
                    <div className="container mx-auto">
                        <motion.h1 className='text-white text-[3vw] mb-10'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.8, duration: 0.5 },
                            }}
                        >
                            {t('Digital Transformation')}
                        </motion.h1>
                    </div>
                    <motion.div className="page-content bg-blue-900 w-full h-screen py-20"
                        initial={{
                            width: '100%',
                            height: 500,
                            margin: 'auto',
                            y: 600
                        }}
                        animate={{
                            width: '100%',
                            height: '100vh',
                            margin: 0,
                            y: 0,
                            transition: { delay: 0.1, ...transition },
                        }}
                    >
                        <div className="container mx-auto">
                            <motion.h1 className='text-white text-[1.5vw] mb-7'
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 1, duration: 0.5 },
                                }}
                            >
                                We are startup digital agency
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 1.1, duration: 0.5 },
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </motion.p>
                            <div className="grid grid-cols-5 gap-4 mt-32 text-center">
                                <motion.div initial={{ y: 400 }} animate={{ y: 0, transition: { delay: 1, duration: 0.6, } }}>
                                    <Link to={'/page'}>
                                        <Card className=' h-full hover:scale-105 border-0 hover:bg-blue-900 transition-all ease-in-out duration-300'>
                                            <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                                                {t("Enrich the experience of the pilgrims")}
                                            </h5>
                                        </Card>
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ y: 400 }} animate={{ y: 0, transition: { delay: 1.1, duration: 0.6, } }}>
                                    <Link to={'/page'}>
                                        <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                                            <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                                                {t("Develop planning, governance and control mechanisms")}
                                            </h5>
                                        </Card>
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ y: 400 }} animate={{ y: 0, transition: { delay: 1.2, duration: 0.6, } }}>
                                    <Link to={'/page'}>
                                        <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                                            <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                                                {t("Digital infrastructure development")}
                                            </h5>
                                        </Card>
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ y: 400 }} animate={{ y: 0, transition: { delay: 1.3, duration: 0.6, } }}>
                                    <Link to={'/page'}>
                                        <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                                            <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                                                {t("Improve the quality of services provided to the pilgrims")}
                                            </h5>
                                        </Card>
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ y: 400 }} animate={{ y: 0, transition: { delay: 1.4, duration: 0.6, } }}>
                                    <Link to={'/page'}>
                                        <Card className='h-full hover:scale-105 border-0 hover:bg-blue-900 hover:text-white text-black transition-all ease-in-out duration-300'>
                                            <h5 className="text-2xl font-bold tracking-tight hover:text-white text-black">
                                                {t("Develop the pilgrims' accommodation services")}
                                            </h5>
                                        </Card>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
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

export default EnrichExperience