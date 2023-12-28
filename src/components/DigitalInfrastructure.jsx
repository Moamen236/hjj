import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ContentModal from './Modals/ContentModal';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const DigitalInfrastructure = ({ t }) => {
    const [openMidaniModal, setOpenMidaniModal] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
            <div id="particles"></div>
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
                                            duration: 1.2,
                                            ease: [0.22, 1, 0.36, 1]
                                        },
                                    }}
                                />
                                <map name="imageMap">
                                    <area className="midani" shape="rect" coords="9,20,152,177" alt="Computer" href="#" onClick={() => setOpenMidaniModal(true)} />
                                    <area className="taskin" shape="rect" coords="281,21,428,174" alt="Phone" href="#" onClick={() => setOpenMidaniModal(true)} />
                                    <area className="microsoft" shape="rect" coords="561,19,722,173" alt="Cup of coffee" href="#" onClick={() => setOpenMidaniModal(true)} />
                                    <area className="power" shape="rect" coords="849,20,980,173" alt="Cup of coffee" href="#" onClick={() => setOpenMidaniModal(true)} />
                                    <area className="company" shape="rect" coords="1093,19,1219,175" alt="Cup of coffee" href="#" onClick={() => setOpenMidaniModal(true)} />
                                    <area className="nusuk" shape="rect" coords="1328,22,1507,173" alt="Cup of coffee" href="#" onClick={() => setOpenMidaniModal(true)} />
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
                            <div className="text-content grid items-start justify-between grid-flow-col mt-[4vw]">
                                <div className="list">
                                    <motion.h2 className='text-white text-[1.5vw] mb-[1.3vw]'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        أهداف ترابط جميع أنظمة الشركة في بيئة رقمية واحدة
                                    </motion.h2>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>تكامل المعلومات</strong>
                                            <p className='mt-2'>توفير معلومات دقيقة وحديثة لجميع الإدارات، مما يسهل اتخاذ القرارات وتحسين أداء الشركة.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>رفع كفاءة العمل</strong>
                                            <p className='mt-2'> تقليل الوقت والجهد المبذول في نقل المعلومات بين الأنظمة، مما يؤدي إلى تحسين الإنتاجية.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>تقليل الهدر والتكاليف</strong>
                                            <p className='mt-2'> تقليل الهدر والتكاليف الناتجة عن تكرار إدخال المعلومات وإجراء العمليات.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='text-white/85 text-[1vw] mb-[1.3vw] font-light leading-30 flex items-start'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5, duration: 0.5 }}
                                    >
                                        <img src={process.env.PUBLIC_URL + '/images/list.png'} alt="" className='w-[2vw]' />
                                        <div className="text mx-[0.8vw]">
                                            <strong className='text-main'>تحسين الجودة المقدمة للحجاج</strong>
                                            <p className='mt-2'>توفير معلومات دقيقة وحديثة للحجاج، مما يسهل عليهم الحصول على الخدمات التي يحتاجونها.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div className="gif"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <motion.img src={process.env.PUBLIC_URL + '/images/digital.gif'} alt="digital infrastructure" className='w-[22vw]'
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    />
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

            <ContentModal title="Digital Infrastructure" isOpen={openMidaniModal} setIsOpen={setOpenMidaniModal}>
                <div className="space-y-6">
                    <motion.div className="gif"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.img src={process.env.PUBLIC_URL + '/images/digital.gif'} alt="digital infrastructure" className='w-[22vw] mx-auto'
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </motion.div>
                </div>
            </ContentModal>
        </>
    )
}

export default DigitalInfrastructure