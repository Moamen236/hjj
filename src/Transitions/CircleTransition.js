import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        clipPath:  'circle(0% at center center)',
        transition: { duration: 1.2, ease: 'easeInOut' }
    },
    animate: {
        clipPath: 'circle(100% at center)',
        transition: { duration: 1.2, ease: 'easeInOut' }
    },
    exit: {
        clipPath: 'circle(20% at right 20%)',
        transition: { duration: .4, ease: 'easeInOut' }
    }
};

const CircleTransition = ({ children, color }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                background: color, // Set the background color of your pages
            }}
            className='position-absolute d-flex'
        >
            {children}
        </motion.div>
    );
};

export default CircleTransition;