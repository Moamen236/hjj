import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';
import InactivityDetector from '../Shared/InactivityDetector';

const startDelay = 9;
const duration = 0.8;
const ease = [0.22, 1, 0.36, 1];

const DevelopingAccommodation = ({ t, i18n }) => {
    const lang = i18n.language;
    const [video, setVideo] = useState('/images/page-1.mp4');
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setVideo('/images/page-2.mp4');
        }, 9000);
    }, []);

    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: true });

    const listAnimate = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <InactivityDetector>
            <Navbar t={t} i18n={i18n} />
            <div className='w-full h-screen flex flex-row justify-center items-center'>
                <video src={process.env.PUBLIC_URL + video} autoPlay loop={video === '/images/page-2.mp4'} muted className="fixed top-0 left-0 min-w-full min-h-full -z-10"
                    style={{
                        transform: lang === 'ar' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                >
                    <source src={process.env.PUBLIC_URL + video} type="video/mp4" />
                </video>

                <div className={`w-full h-screen flex flex-row justify-between items-start mx-40 pt-20`}>
                    <div className="content w-[40vw]">
                        <motion.div className="page-header mb-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: duration, ease: ease, delay: startDelay + 0.1 }}
                            style={{
                                background: lang === 'ar' ? `url(${process.env.PUBLIC_URL + '/images/title-shape.png'}) right center no-repeat` : `url(${process.env.PUBLIC_URL + '/images/title-shape-en.png'}) left center no-repeat`,
                                backgroundSize: 'contain'
                            }}
                        >
                            <div className={lang === 'ar' ? 'pr-52' : 'pl-52'}>
                                <TextAnimation el="h1" className='text-main text-[1.8vw] mb-2 font-bold pt-10' text="تطوير خدمة تسكين الحجاج في المشاعر" elDelay={startDelay + 0.1} />
                            </div>
                            {/* <TextAnimation el="p" className='text-white text-[1.2vw]' text="التحول الرقمي لتطوير جودة الخدمات المقدمة لضيوف الرحمن" elDelay={startDelay + 1} /> */}
                        </motion.div>

                        <motion.div className="relative overflow-hidden"
                            style={{
                                border: '40px solid transparent',
                                borderImage: `url(${process.env.PUBLIC_URL + '/images/frame.png'}) 100 / 2 / 1 round`
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: startDelay + 2, duration: duration, ease: ease } }}
                        >
                            <video className="mx-auto w-full h-[20vw] rounded-2xl" loop controls>
                                <source src={process.env.PUBLIC_URL + '/images/videos/developing-accommodation.mp4'} type="video/mp4" />
                                <p className="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading to a
                                    web browser
                                </p>
                            </video>
                            <motion.div className="overlay absolute top-0 left-0 w-full h-full bg-blue-950"
                                initial={{ width: "100%" }}
                                animate={{ width: 0, transition: { delay: startDelay + 3, duration: duration, ease: ease }, }}
                            ></motion.div>
                        </motion.div>
                        <div className="text-content grid items-start justify-between grid-flow-col mt-[2.1vw]">
                            <div className="list">
                                {/* <TextAnimation el="h2" className='text-white text-[1.2vw] mb-[1.3vw]' text="أهداف تحول الرقابة الميدانية على خدمات الحجاج من النظام الورقي الى الرقمي" elDelay={startDelay + 3} /> */}
                                <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                    variants={listAnimate}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    transition={{ duration: duration }}
                                >
                                    <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        transition={{ delay: startDelay + 4, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="مساعدة مراكز الخدمة في دراسة وتجهيز الخدمات للحجاج" elDelay={startDelay + 4} />
                                        <TextAnimation el="p" className='mt-2' text=" تتيح البيانات الرقمية لمراكز الخدمة دراسة توزيع الحجاج بشكل أكثر دقة، مما يساعدها على تجهيز الخدمات المناسبة وتجنب التكدس." elDelay={startDelay + 5} />
                                    </div>
                                </motion.div>
                                <motion.div ref={ref} className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                    variants={listAnimate}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    transition={{ duration: duration }}
                                >
                                    <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        transition={{ delay: startDelay + 6, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="تسكين الحجاج بدقة في المشاعر وحصولهم على الخدمات المقدمة" elDelay={startDelay + 6} />
                                        <TextAnimation el="p" className='mt-2' text="يضمن النظام الرقمي حصول الحجاج على السكن الصحيح في المشاعر، مما يسهل عليهم الحصول على الخدمات المقدمة." elDelay={startDelay + 7} />
                                    </div>
                                </motion.div>
                                <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                    variants={listAnimate}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    transition={{ duration: duration }}
                                >
                                    <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        transition={{ delay: startDelay + 8, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="ضمان حصول الحاج على السكن المتفق عليه" elDelay={startDelay + 8} />
                                        {/* <TextAnimation el="p" className='mt-2' text=" يوفر النظام الرقمي أدوات وتقارير تساعد على توثيق الجودة والمعايير الصحية للغذاء، مما يضمن حصول الحجاج على غذاء آمن وصحي." elDelay={startDelay + 9} /> */}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                    <div className="content w-[40vw] flex flex-row justify-end">
                        <div className="content">
                            <motion.div className="tablet w-[35vw]"
                                variants={listAnimate}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ delay: startDelay + 1, duration: duration }}
                            >
                                <img src={process.env.PUBLIC_URL + '/images/sup_pages/tablet.gif'} className="w-full" alt="" />
                            </motion.div>
                            <div className="flex flex-row justify-between items-center mt-10">
                                <motion.div className="mobile w-[23vw]"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: startDelay + 1, duration: 0.5 }}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/sup_pages/tasken.jpg'} className="w-full" alt="" />
                                </motion.div>
                                <motion.div className="mobile w-[10vw]"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: startDelay + 1, duration: 0.5 }}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/sup_pages/mobile.gif'} className="w-full" alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default DevelopingAccommodation;