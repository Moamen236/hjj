import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';
import InactivityDetector from '../Shared/InactivityDetector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const startDelay = 9;
const duration = 0.3;
const ease = [0.22, 1, 0.36, 1];

const DevelopingSubsistence = ({ t, i18n }) => {
    const lang = i18n.language;
    const [video, setVideo] = useState('/images/page-1.mp4');
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setVideo('/images/page-2.mp4');
        }, 9000);
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const listAnimate = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    }

    const imageYAnimate = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
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
                        <div className="">
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
                                    <TextAnimation el="h1" className='text-main text-[1.8vw] mb-2 font-bold pt-10' text="تطوير رقابة الإعاشة للحجاج" elDelay={startDelay + 0.1} />
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
                                    <source src={process.env.PUBLIC_URL + '/images/videos/developing-subsistence.mp4'} type="video/mp4" />
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
                        </div>
                        <motion.div className="text-content mt-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: duration, ease: ease, delay: startDelay + 3 }}
                        >
                            <Swiper
                                centeredSlides={true}
                                autoplay={{
                                    delay: 7000,
                                    disableOnInteraction: false,
                                }}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                speed={1000}
                                onSlideChange={handleSlideChange}
                                modules={[EffectFade, Autoplay]}
                            >
                                <SwiperSlide>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 0 ? "visible" : "hidden"}
                                        transition={{ duration: duration }}
                                    >
                                        <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                            variants={listAnimate}
                                            initial="hidden"
                                            animate={activeIndex === 0 ? "visible" : "hidden"}
                                            transition={{ duration: duration }}
                                        />
                                        <div className="text mx-[0.8vw]">
                                            {
                                                activeIndex === 0 ? (
                                                    <>
                                                        <TextAnimation el="strong" className='text-main font-bold' text="متابعة تأهيل وتقديم التغذية من المتعهدين في المشاعر" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text="يضمن النظام الرقمي تأهيل ومتابعة المتعهدين وفق مواصفات ومعايير محددة لضمان حصول ضيوف الرحمن على أفضل خدمة." />
                                                    </>
                                                ) : null
                                            }
                                        </div>
                                    </motion.div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 1 ? "visible" : "hidden"}
                                        transition={{ duration: duration }}
                                    >
                                        <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                            variants={listAnimate}
                                            initial="hidden"
                                            animate={activeIndex === 1 ? "visible" : "hidden"}
                                            transition={{ duration: duration }}
                                        />
                                        <div className="text mx-[0.8vw]">
                                            {
                                                activeIndex === 1 ? (
                                                    <>
                                                        <TextAnimation el="strong" className='text-main font-bold' text="حصول الحجاج على الغذاء الخاص بهم بموعده" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text="يضمن النظام الرقمي متابعة تسليم الوجبات في الوقت المحدد للحجاج دون التأخر عن موعدها." />
                                                    </>
                                                ) : null
                                            }
                                        </div>
                                    </motion.div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        variants={listAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 2 ? "visible" : "hidden"}
                                        transition={{ duration: duration }}
                                    >
                                        <motion.img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]'
                                            variants={listAnimate}
                                            initial="hidden"
                                            animate={activeIndex === 2 ? "visible" : "hidden"}
                                            transition={{ duration: duration }}
                                        />
                                        <div className="text mx-[0.8vw]">
                                            {
                                                activeIndex === 2 ? (
                                                    <>
                                                        <TextAnimation el="strong" className='text-main font-bold' text="حصول الحجاج على الغذاء الخاص بهم مطابق للجودة والمعايير" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text=" يوفر النظام الرقمي أدوات وتقارير تساعد على توثيق الجودة والمعايير الصحية للغذاء، مما يضمن حصول الحجاج على غذاء آمن وصحي." />
                                                    </>
                                                ) : null
                                            }
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>

                    </div>
                    <motion.div className="content mt-7 w-[40vw] flex flex-row justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: duration, ease: ease, delay: startDelay + 3 }}
                    >
                        <Swiper
                            centeredSlides={true}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            effect={"fade"}
                            fadeEffect={{
                                crossFade: true
                            }}
                            speed={1000}
                            onSlideChange={handleSlideChange}
                            modules={[EffectFade, Autoplay]}
                        >
                            {/* Point 1 */}
                            <SwiperSlide>
                                <div className="content flex flex-col items-center">
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 0 ? "visible" : "hidden"}
                                        transition={{ delay: 0.4, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/system-point-1.gif'} className="w-full" alt="" />
                                    </motion.div>
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 0 ? "visible" : "hidden"}
                                        transition={{ delay: 0.8, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/tablet-point-3.gif'} className="w-full" alt="" />
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                            {/* Point 1 */}

                            {/* Point 2 */}
                            <SwiperSlide>
                                <div className="content flex flex-col items-center">
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 1 ? "visible" : "hidden"}
                                        transition={{ delay: 0.4, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/system-point-2.gif'} className="w-full" alt="" />
                                    </motion.div>
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 1 ? "visible" : "hidden"}
                                        transition={{ delay: 0.8, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/tablet-point-3.gif'} className="w-full" alt="" />
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                            {/* Point 2 */}

                            {/* Point 3 */}
                            <SwiperSlide>
                                <div className="content flex flex-col items-center">
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 2 ? "visible" : "hidden"}
                                        transition={{ delay: 0.4, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/system-point-3.gif'} className="w-full" alt="" />
                                    </motion.div>
                                    <motion.div className="w-[30vw]"
                                        variants={imageYAnimate}
                                        initial="hidden"
                                        animate={activeIndex === 2 ? "visible" : "hidden"}
                                        transition={{ delay: 0.8, duration: duration }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/subsistence/tablet-point-3.gif'} className="w-full" alt="" />
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                            {/* Point 3 */}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default DevelopingSubsistence;