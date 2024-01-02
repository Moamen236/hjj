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

const DigitalInfrastructure = ({ t, i18n }) => {
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


    // const handleClick = (event) => {
    //     // Ensure the image reference exists
    //     if (imageRef.current) {
    //         // Get the coordinates of the click relative to the image
    //         const x = event.nativeEvent.offsetX;
    //         const y = event.nativeEvent.offsetY;

    //         // Log the coordinates
    //         console.log(`Clicked at coordinates (x, y): ${x}, ${y}`);
    //     }
    // };

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
                                    <TextAnimation el="h1" className='text-main text-[1.8vw] mb-2 font-bold pt-10' text="بيئة رقمية واحدة لخدمة الحجاج" elDelay={startDelay + 0.2} />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div className="text-content mt-[2.1vw]"
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
                                                        <TextAnimation el="strong" className='text-main font-bold' text="تكامل المعلومات" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text="ترابط الأنظمة في بيئة رقمية واحدة تؤدي لتوفير معلومات دقيقة ومحدثة لجميع الإدارات." />
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
                                                        <TextAnimation el="strong" className='text-main font-bold' text="رفع كفاءة العمل" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text="توفير هذه المعلومات ستسهل اتخاذ القرارات وتحسن أداء الشركة." />
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
                                                        <TextAnimation el="strong" className='text-main font-bold' text="تحسين الجودة المقدمة للحجاج" title={true} />
                                                        <TextAnimation el="p" className='mt-2' text="توفير معلومات دقيقة لفريق العمل، مما يسهل حصول الحجاج على الخدمات التي يحتاجونها." />
                                                    </>
                                                ) : null
                                            }
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>

                    </div>
                    <div className="content w-[40vw]">
                        <div className="flex flex-row justify-end">
                            <motion.div className="image w-full"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: startDelay + 1, duration: 0.5 }}
                            >
                                <img src={process.env.PUBLIC_URL + '/images/digital-infrastructure.gif'} className='w-full' alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default DigitalInfrastructure