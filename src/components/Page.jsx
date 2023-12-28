import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ContentModal from './Modals/ContentModal';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const Page = ({ t }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (isInView) {
            mainControls.start('animate');
        }
    }, [isInView]);

    const imageRef = useRef(null);

    const handleClick = (event) => {
        // Ensure the image reference exists
        if (imageRef.current) {
            // Get the coordinates of the click relative to the image
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;

            // Log the coordinates
            console.log(`Clicked at coordinates (x, y): ${x}, ${y}`);
        }
    };

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
                            بيئة رقمية واحدة لخدمة الحجاج
                        </motion.h1>
                        <motion.p className='text-white text-[1.2vw] mb-10'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.9, duration: 0.5 },
                            }}
                        >
                            تطوير البنية التحتية الرقمية
                        </motion.p>
                    </div>
                    <motion.div className="page-content h-screen bg-blue-900 bg-opacity-50 w-full pt-20 pb-20"
                        initial={{
                            y: 600,
                        }}
                        animate={{
                            y: 0,
                            transition: { delay: 0.1, ...transition },
                        }}
                    >
                        <div className="w-[75vw] mx-auto">
                            <div className="image relative overflow-hidden">
                                <motion.img src={process.env.PUBLIC_URL + '/images/banner.png'} className='mx-auto w-full' alt="page" useMap="#imageMap"
                                    ref={imageRef}
                                    onClick={handleClick}
                                    initial={{
                                        opacity: 0,
                                        scale: 1.5
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: 1,
                                            duration: 1.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        },
                                    }}
                                />
                                <map name="imageMap">
                                    <area className="midani" shape="rect" coords="9,20,152,177" alt="Computer" href="#" onClick={() => setOpenModal(true)} />
                                    <area className="taskin" shape="rect" coords="281,21,428,174" alt="Phone" href="#" />
                                    <area className="microsoft" shape="rect" coords="561,19,722,173" alt="Cup of coffee" href="#" />
                                    <area className="power" shape="rect" coords="849,20,980,173" alt="Cup of coffee" href="#" />
                                    <area className="company" shape="rect" coords="1093,19,1219,175" alt="Cup of coffee" href="#" />
                                    <area className="nusuk" shape="rect" coords="1328,22,1507,173" alt="Cup of coffee" href="#" />
                                </map>
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
                            </div>
                            <div ref={ref} className="text-content mt-20">
                                <h2
                                    className='text-white/85 text-[1.5vw] mb-10'
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.8, duration: 0.5 },
                                    }}
                                    initial="initial"
                                    animate={mainControls}
                                >
                                    أهداف ترابط جميع أنظمة الشركة في بيئة رقمية واحدة
                                </h2>
                                <motion.div className='text-white/85 text-[1vw] mb-10 font-light leading-30 flex items-start'
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.8, duration: 0.5 },
                                    }}
                                    initial="initial"
                                    animate={mainControls}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                    <div className="text mx-4">
                                        <strong className='text-main'>تكامل المعلومات</strong>
                                        <p className='mt-2'>توفير معلومات دقيقة وحديثة لجميع الإدارات، مما يسهل اتخاذ القرارات وتحسين أداء الشركة.</p>
                                    </div>
                                </motion.div>
                                <motion.div className='text-white/85 text-[1vw] mb-10 font-light leading-30 flex items-start'
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.9, duration: 0.5 },
                                    }}
                                    initial="initial"
                                    animate={mainControls}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                    <div className="text mx-4">
                                        <strong className='text-main'>رفع كفاءة العمل</strong>
                                        <p className='mt-2'> تقليل الوقت والجهد المبذول في نقل المعلومات بين الأنظمة، مما يؤدي إلى تحسين الإنتاجية.</p>
                                    </div>
                                </motion.div>
                                <motion.div className='text-white/85 text-[1vw] mb-10 font-light leading-30 flex items-start'
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 1, duration: 0.5 },
                                    }}
                                    initial="initial"
                                    animate={mainControls}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                    <div className="text mx-4">
                                        <strong className='text-main'>تقليل الهدر والتكاليف</strong>
                                        <p className='mt-2'> تقليل الهدر والتكاليف الناتجة عن تكرار إدخال المعلومات وإجراء العمليات.</p>
                                    </div>
                                </motion.div>
                                <motion.div className='text-white/85 text-[1vw] mb-10 font-light leading-30 flex items-start'
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 1.2, duration: 0.5 },
                                    }}
                                    initial="initial"
                                    animate={mainControls}
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                    <div className="text mx-4">
                                        <strong className='text-main'>تحسين الجودة المقدمة للحجاج</strong>
                                        <p className='mt-2'>توفير معلومات دقيقة وحديثة للحجاج، مما يسهل عليهم الحصول على الخدمات التي يحتاجونها.</p>
                                    </div>
                                </motion.div>
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

            <ContentModal isOpen={openModal} setIsOpen={setOpenModal}>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                        to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                        soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
            </ContentModal>
        </>
    )
}

export default Page