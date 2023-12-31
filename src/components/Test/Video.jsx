import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TextAnimation } from '../Shared/TextAnimation';

const startDelay = 9;
const duration = 0.8;
const ease = [0.22, 1, 0.36, 1]


const Video = ({ t, i18n }) => {
  const lang = i18n.language;
  const [video, setVideo] = useState('/images/page-1.mp4');

  useEffect(() => {
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
    <>
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
            <div className="header mb-20">
              <TextAnimation el="h1" className='text-main text-[2vw] mb-2' text="تطوير خدمات الإعاشة للحجاج" elDelay={startDelay + 0.1} />
              <TextAnimation el="p" className='text-white text-[1.2vw]' text="التحول الرقمي لتطوير جودة الخدمات المقدمة لضيوف الرحمن" elDelay={startDelay + 1} />
            </div>

            <motion.div className="relative overflow-hidden"
              style={{
                border: '40px solid transparent',
                borderImage: `url(${process.env.PUBLIC_URL + '/images/frame.png'}) 100 / 2 / 1 round`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: startDelay + 2, duration: duration, ease: ease } }}
            >
              <video id="my-video" className="video-js mx-auto w-full h-[20vw] rounded-2xl" 
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
                initial={{ width: "100%" }}
                animate={{ width: 0, transition: { delay: startDelay + 3, duration: duration, ease: ease }, }}
              ></motion.div>
            </motion.div>
            <div className="text-content grid items-start justify-between grid-flow-col mt-[2.1vw]">
              <div className="list">
                <TextAnimation el="h2" className='text-white text-[1.2vw] mb-[1.3vw]' text="اهداف تحول الرقابة الميدانية على خدمات الحجاج من النظام الورقي الى الرقمي" elDelay={startDelay + 3} />
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
                    transition={{ delay: startDelay + 5, duration: duration }}
                  />
                  <div className="text mx-[0.8vw]">
                    <TextAnimation el="strong" className='text-main' text="توفير معلومات فورية" elDelay={startDelay + 5} />
                    <TextAnimation el="p" className='mt-2' text="يسمح النظام الرقمي بتسجيل البيانات والملاحظات فورًا، مما يسهل على المسؤولين اتخاذ القرارات وتنفيذ التحسينات اللازمة." elDelay={startDelay + 6} />
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
                    transition={{ delay: startDelay + 7, duration: duration }}
                  />
                  <div className="text mx-[0.8vw]">
                    <TextAnimation el="strong" className='text-main' text="رفع كفاءة موظفي الرقابة الميدانية" elDelay={startDelay + 7} />
                    <TextAnimation el="p" className='mt-2' text="يوفر النظام الرقمي أدوات وتقارير تساعد موظفي الرقابة الميدانية على أداء مهامهم بكفاءة أكبر." elDelay={startDelay + 8} />
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
                    transition={{ delay: startDelay + 9, duration: duration }}
                  />
                  <div className="text mx-[0.8vw]">
                    <TextAnimation el="strong" className='text-main' text="رفع كفاءة موظفي الرقابة الميدانية" elDelay={startDelay + 9} />
                    <TextAnimation el="p" className='mt-2' text="يوفر النظام الرقمي أدوات وتقارير تساعد موظفي الرقابة الميدانية على أداء مهامهم بكفاءة أكبر." elDelay={startDelay + 10} />
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
          <div className="content w-[40vw] flex flex-row justify-end">
            <motion.div className="image"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: startDelay + 1, duration: 0.5 }}
            >
              <img src={process.env.PUBLIC_URL + '/images/digital.gif'} className='' alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video