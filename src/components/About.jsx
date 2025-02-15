import React, { useEffect, useState } from 'react'
import { CourseData } from "../coursedata/CourseData"
import ShowCourse from './ShowCourse'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'motion/react';

const About = () => {
  const [Index, setIndex] = useState(0)
  const [cardToShow, setCardToShow] = useState(2)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(CourseData.length)
      }
      else {
        setCardToShow(1)
      }
    }
    updateCardToShow();

    window.addEventListener("resize", updateCardToShow)
    return () => window.removeEventListener("resize", updateCardToShow)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); // Small delay to prevent flickering
    return () => clearTimeout(timer);
  }, []);

  function RightScroll() {
    setIndex(preve => (preve + 2) % CourseData.length)

  }
  function LeftScroll() {
    setIndex(preve => preve === 0 ? CourseData.length - 2 : preve - 2)
  }

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* story of mine */}
      <div>
        <h1 className='text-2xl md:text-3xl font-bold text-yellow-500 place-content-center flex my-5'>Here's My Journey</h1>

        <p
          className='text-stone-400 hover:text-white'>
          I’m Boopathiraja S, a passionate Frontend Developer with a knack for creating intuitive and visually appealing web experiences.
          My journey into the world of coding began during my school days, where I developed a love for technology and problem-solving.
        </p>
        <br />
        <p className='text-stone-400 hover:text-white'>
          I completed my schooling at Sri Ramakrishna Mission Vidyalaya Swami Shivananda Higher Secondary School, where I built a strong foundation in academics and actively participated in tech and creative competitions.
          After graduating, I pursued my higher education at SNS College of Engineering, earning a B.E. Computer Science and Technology.
          During this time, I discovered my passion for web development and honed my skills in HTML, CSS, and JavaScript
        </p>
        <br />
        <p className='text-stone-400 hover:text-white'>
          In addition to formal education, I’ve taken several online courses on platforms like Coursera, where I expanded my knowledge in ReactJS, responsive design, and API integration.
          My dedication to continuous learning has allowed me to stay up-to-date with the latest trends in frontend development.
        </p>
        <br />
        <p className='text-stone-400 hover:text-white'>
          Beyond my professional pursuits, I enjoy exploring new technologies, designing creative projects, or contributing to open-source.
          Each project I take on is a step toward crafting experiences that make an impact.
        </p>
        <br />
      </div>

      {/* skills */}
      <div className=''>
        <h1 className='text-2xl md:text-3xl flex place-content-center my-5 font-bold text-yellow-500'>
          What I have ?
        </h1>

        {/* images */}

        <div className='flex'>
        <button className='block text-xl cursor-pointer' onClick={LeftScroll}><FaChevronLeft /></button>

        <div className='flex items-center gap-5 py-3 pl-3
         text-black
         overflow-scroll drop-shadow-lg'
          id='scroll'
        >
          {
            CourseData.map((data) => {
              return (
                <div 
                style={{ transform: `translate(-${(Index * 100) / cardToShow}%)` }}
                key={data.id}>
                  <ShowCourse
                    key={data.id}
                    courseName={data.course}
                    image = {data.img}
                    level={data.level}
                  />
                </div>
              )
            })
          }
        </div>
        <button className='block text-xl cursor-pointer' onClick={RightScroll}><FaChevronRight /></button>
      </div>

      </div>
    </motion.div>
  )
}

export default About