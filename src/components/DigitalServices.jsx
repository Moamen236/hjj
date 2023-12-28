import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const DigitalServices = ({ t }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="w-full h-full overflow-hidden">
                <div className="content pt-20">
                    <div className="w-[75vw] mx-auto">
                        <motion.h1 className='text-main text-[2vw] mb-2'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.8, duration: 0.5 },
                            }}
                        >
                            {/* {t('Digital Transformation')} */}
                            رقابة رقمية لتحسين خدمات الحجاج 
                        </motion.h1>
                        <motion.p className='text-white text-[1.2vw] mb-10'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.9, duration: 0.5 },
                            }}
                        >
                            التحول الرقمي لتطوير آليات التخطيط والحوكمة والرقابة
                        </motion.p>
                    </div>
                    <motion.div className="page-content h-full bg-blue-900 bg-opacity-50 w-full pt-20 pb-20"
                        initial={{
                            y: 600,
                        }}
                        animate={{
                            y: 0,
                            transition: { delay: 0.1, ...transition },
                        }}
                    >
                        <div className="w-[75vw] mx-auto">
                            <motion.div className="relative overflow-hidden"
                                style={{
                                    border: '110px solid transparent',
                                    borderImage: `url(${process.env.PUBLIC_URL + '/images/frame.png'}) 100 round`
                                }}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.9,
                                        duration: 1.4,
                                        ease: [0.22, 1, 0.36, 1]
                                    },
                                }}
                            >
                                <video
                                    id="my-video"
                                    className="video-js mx-auto w-full h-[35vw] rounded-2xl"
                                    preload="auto"
                                    data-setup="{}"
                                    loop
                                    controls
                                    autoPlay
                                >
                                    <source src={process.env.PUBLIC_URL + '/images/videos/digital-services.mp4'} type="video/mp4" />
                                    <p className="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser
                                    </p>
                                </video>
                                <motion.div className="overlay absolute top-0 left-0 w-full h-full bg-blue-950"
                                    initial={{
                                        width: "100%",
                                    }}
                                    animate={{
                                        width: 0,
                                        transition: {
                                            delay: 0.9,
                                            duration: 1.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        },
                                    }}
                                ></motion.div>
                            </motion.div>
                            <div className="text-content grid items-start justify-between grid-flow-col mt-[4vw]">
                                <div className="list">
                                    <motion.h2 className='text-white text-[1.5vw] mb-[1.3vw]'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        أهداف تحول الرقابة الميدانية على خدمات الحجاج من النظام الورقي الى الرقمي
                                    </motion.h2>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>توفير معلومات فورية</strong>
                                            <p className='mt-2'> يسمح النظام الرقمي بتسجيل البيانات والملاحظات فورًا، مما يسهل على المسؤولين اتخاذ القرارات وتنفيذ التحسينات اللازمة.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>رفع كفاءة موظفي الرقابة الميدانية</strong>
                                            <p className='mt-2'>يوفر النظام الرقمي أدوات وتقارير تساعد موظفي الرقابة الميدانية على أداء مهامهم بكفاءة أكبر.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>رفع جودة الخدمات المقدمة للحجاج</strong>
                                            <p className='mt-2'> يؤدي تحسين كفاءة الرقابة الميدانية إلى رفع جودة الخدمات المقدمة للحجاج، حيث يتم اكتشاف المشكلات ومعالجتها بشكل أسرع.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                {/* <motion.div className="gif"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <motion.img src={process.env.PUBLIC_URL + '/images/digital.gif'} alt="digital infrastructure" className='w-[22vw]'
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                </motion.div> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
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

export default DigitalServices;