import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { button } from 'motion/react-client'

const ShowProjects = ({ ProjectName, image, Github, Website, Description }) => {

    const [show, setShow] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex bg-yellow-100 rounded-md w-full items-center 
        justify-center p-6 shadow-lg hover:shadow-amber-500 hover:scale-105 
        transition-all'>
            <div className='flex flex-col gap-5 items-center w-36 justify-center h-72'>

                <h1 className='text-lg font-bold line-clamp-1'>{ProjectName}</h1>

                <img
                    src={image}
                    alt={ProjectName}
                    className='w-20 h-12 drop-shadow-lg' />

                <button className='bg-blue-500 hover:bg-blue-600
            text-white p-1 px-2 rounded-md hover:scale-105 transition-all'>
                    <a
                        href={Github}
                        target='_blank'
                        id='github'
                        className='font-medium'>
                        Github Code</a>
                </button>

                <button
                    className='bg-blue-500 hover:bg-blue-600
            text-white p-1 px-2 rounded-md hover:scale-105 transition-all'>
                    <a href={Website}
                        target='_blank'
                        id='website'
                        className='font-medium'>
                        Website Link</a>
                </button>

                <div className=''>
                    <motion.button
                        className='bg-red-500 hover:bg-red-600 
                    cursor-pointer text-white rounded-md p-1 px-2 
                    hover:scale-105 transition-all font-medium relative border-none outline-none'
                        onClick={() => setShow(!show)}
                        whileTap={{ y: 1 }}
                    >
                        {`${!show ? "View Details" : "Hide Details"}`}
                    </motion.button>

                    <AnimatePresence initial={false}>
                        {
                            show && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='bg-white h-60 w-48 z-50 overflow-scroll 
                            absolute top-1 right-0 left-0 bottom-0 rounded-xl'
                                    id='projectDetails'>
                                    <p className='text-sm md:text-[15px] m-3 leading-6 font-medium'>{Description}</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                </div>
            </div>
        </motion.div>
    )
}

export default ShowProjects