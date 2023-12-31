import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const TextAnimation = ({ text, el, className, elDelay }) => {
    const defaultAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: true });
    const Element = el;

    return (
        <Element className={className} key={text}>
            {text.split(' ').map((letter, index) => {
                return (
                    <>
                        <motion.span
                            ref={ref}
                            key={index + elDelay}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={defaultAnimation}
                            // transition={{ delay: index * 0.1 }}
                            transition={{ delay: elDelay + index * 0.2, duration: 1 }}
                            className={className}
                            aria-hidden
                        >{letter} </motion.span>
                    </>
                );
            })}
        </Element>
    );
}