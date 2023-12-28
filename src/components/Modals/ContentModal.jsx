import React, {useEffect} from 'react'
import { motion } from 'framer-motion'

const ContentModal = ({ title, isOpen, setIsOpen, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setIsOpen(false);
        }
    };

    // Attach event listener when modal is open
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        // Clean up event listener when modal is closed
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
            {
                isOpen && (
                    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div id="default-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative p-4 w-full max-w-7xl max-h-full">
                                <div className="relative bg-blue-900 rounded-lg shadow pb-10">
                                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                                        <button type="button" className="text-black bg-main hover:bg-main/75 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }
        </>
    )
}

export default ContentModal