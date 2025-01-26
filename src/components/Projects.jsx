import React, { useEffect, useState } from 'react'
import { ProjectsData } from "../coursedata/CourseData"
import ShowProjects from './ShowProjects'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Projects = () => {

  const [Index, setIndex] = useState(0)
  const [cardToShow, setCardToShow] = useState(1)

  useEffect(() => {

    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(ProjectsData.length)
      }
      else {
        setCardToShow(1)
      }
    }
    updateCardToShow();
    window.addEventListener("resize", updateCardToShow)
    return () => window.removeEventListener("resize", updateCardToShow)
  }, [])

  function RightScroll() {
    setIndex(preve => (preve + 1) % ProjectsData.length + 1)

  }
  function LeftScroll() {
    setIndex(preve => preve === 0 ? ProjectsData.length - 1 : preve - 1)
  }

  return (
    <div className='mt-10'>

      {/* title */}
      <h1 className='text-2xl md:text-3xl font-bold text-yellow-500 
      place-content-center flex my-5'>Projects</h1>
      <div className='mx-8 my-5'>
        <p className='text-[17px] leading-7'>
          I have completed the following projects, showcasing my skills
          and expertise. You can view their source code and explore the
          live versions hosted on Vercel.
        </p>
      </div>

      {/* peoject component */}
      <div className='flex'>
        <button className='block text-xl cursor-pointer' onClick={LeftScroll}><FaChevronLeft /></button>

        <div className='flex items-center gap-5 py-3 pl-3
         text-black
         overflow-scroll drop-shadow-lg'
          id='scroll'
        >
          {
            ProjectsData.map((data) => {
              return (
                <div 
                style={{ transform: `translate(-${(Index * 100) / cardToShow}%)` }}
                key={data.id}>
                  <ShowProjects
                    key={data.id}
                    ProjectName={data.projectName}
                    image={data.img}
                    Github={data.Github}
                    Website={data.website}
                    Description={data.description}
                  />
                </div>
              )
            })
          }
        </div>
        <button className='block text-xl cursor-pointer' onClick={RightScroll}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default Projects