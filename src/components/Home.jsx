import React from 'react'
import profile from "../assets/profile.png"
import resume from "../assets/resume.pdf"
import { motion } from 'motion/react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-screen flex justify-between px-3 items-center border-b border-b-stone-600 mb-5'>

      {/* content */}
      <div className='relative z-10 md:mt-44 mt-[350px] mb-5'>
        <pre className='text-3xl md:text-4xl lg:text-5xl font-bold my-5'> I'm
          <br />
          <span className='text-yellow-500'> Boopathiraja S</span>
        </pre>

        {/* paragraph */}
        <div className=''>
          <p className='md:text-lg'>
            A passionate Frontend Developer dedicated to crafting user-friendly and visually
            appealing web applications.
            <br />
            I thrive on bringing ideas to life through clean code and creative designs.
          </p>
          {/* resume */}
          <button className='bg-blue-500 hover:bg-blue-600
            text-white w-32 h-9 rounded-full items-center 
            flex justify-center mx-auto mt-5 hover:scale-105 transition-all'>
            <a href={resume}
              target='_blank'
              id='resumeA'
            >
              View Resume</a>
          </button>
        </div>
      </div>

      {/* img */}
      <div className='z-0 absolute right-1 lg:right-4 top-28 lg:top-22'>
        <img src={profile} className='max-h-[320px] lg:min-h-[450px] rounded-md w-full' alt="profile picture" />
      </div>
    </motion.div>
  )
}

export default Home