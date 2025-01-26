import React from 'react'
import { motion } from 'motion/react'

const ShowCourse = ({ courseName, image, level }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex bg-white rounded-md w-full items-center 
        justify-center p-5 shadow-md hover:shadow-amber-400 hover:scale-105 
        transition-all'>
            <div className='flex flex-col gap-5 items-center w-32 justify-center h-56 md:h-44'>
                <h1 className='text-lg font-bold'>{courseName}</h1>
                <img src={image} alt={courseName} className='w-24 h-16 drop-shadow-lg' />
                <p className='font-medium text-[18px] text-red-600'>{level}</p>
            </div>
        </motion.div>
    )
}

export default ShowCourse