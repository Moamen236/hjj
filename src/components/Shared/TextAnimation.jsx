import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TextAnimation = ({ text, el, className, title }) => {
    const defaultAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: true });
    const Element = el;
    const delay = title === true ? 0.1 : 0.08;
    return (
        <Element className={className} key={text}>
            {text.split(' ').map((letter, index) => {
                return (
                    <>
                        <motion.span
                            ref={ref}
                            key={index}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={defaultAnimation}
                            // transition={{ delay: index * 0.1 }}
                            transition={{ delay: index * delay, duration: 0.5 }}
                            className={className}
                            aria-hidden
                        >{letter} </motion.span>
                    </>
                );
            })}
        </Element>
    );
}