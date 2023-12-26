import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Page = ({ t }) => {
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
                    <motion.div className="page-content bg-blue-900 w-full py-20"
                        initial={{
                            y: 600,
                        }}
                        animate={{
                            y: 0,
                            transition: { delay: 0.1, ...transition },
                        }}
                    >
                        <div className="container mx-auto">
                            <div className="image">
                                <motion.img src={process.env.PUBLIC_URL + '/images/page.jpg'} className='mx-auto w-full' alt="page" 
                                    initial={{ 
                                        y: 300,
                                        opacity: 0
                                    }}
                                    animate={{ 
                                        y: 0,
                                        opacity: 1,
                                        transition: { 
                                            delay: 1, 
                                            duration: 1.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        },
                                    }}
                                />
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

export default Page