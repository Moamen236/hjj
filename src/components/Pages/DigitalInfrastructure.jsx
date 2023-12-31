import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';
import InactivityDetector from '../Shared/InactivityDetector';

const startDelay = 9;
const duration = 0.8;
const ease = [0.22, 1, 0.36, 1];

const DigitalInfrastructure = ({ t, i18n }) => {
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
                            {/* <TextAnimation el="p" className='text-white text-[1.2vw]' text="التحول الرقمي لتطوير جودة الخدمات المقدمة لضيوف الرحمن" elDelay={startDelay + 1} /> */}
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
                                        transition={{ delay: startDelay + 1, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="تكامل المعلومات" elDelay={startDelay + 1} />
                                        <TextAnimation el="p" className='mt-2' text="ترابط الأنظمة في بيئة رقمية واحدة تؤدي لتوفير معلومات دقيقة ومحدثة لجميع الإدارات." elDelay={startDelay + 2} />
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
                                        transition={{ delay: startDelay + 3, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="رفع كفاءة العمل" elDelay={startDelay + 3} />
                                        <TextAnimation el="p" className='mt-2' text="توفير هذه المعلومات ستسهل اتخاذ القرارات وتحسن أداء الشركة." elDelay={startDelay + 4} />
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
                                        transition={{ delay: startDelay + 5, duration: duration }}
                                    />
                                    <div className="text mx-[0.8vw]">
                                        <TextAnimation el="strong" className='text-main font-bold' text="تحسين الجودة المقدمة للحجاج" elDelay={startDelay + 5} />
                                        <TextAnimation el="p" className='mt-2' text="توفير معلومات دقيقة لفريق العمل، مما يسهل حصول الحجاج على الخدمات التي يحتاجونها." elDelay={startDelay + 6} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

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