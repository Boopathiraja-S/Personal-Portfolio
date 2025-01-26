import React from 'react'
import { FooterData } from '../coursedata/CourseData'
import { div } from 'motion/react-client'

const Footer = () => {
  return (
    <div className='bg-stone-800 p-5 mt-5 border-t border-t-stone-500 shadow shadow-white'>
      <div className='flex flex-col md:flex-row md:justify-evenly border-b border-b-stone-600 pb-2'>
        {/* Social meadia links */}
        <div>
          <h3 className='text-yellow-500 font-medium text-[17px]'>Social media links </h3>
          <div className='flex gap-5 my-5'>
            {
              FooterData.map(data => (
                <div className='' key={data.id}>
                  <a
                    href={data.link}
                    target='_blank' id='footerImg'>
                    <img
                      src={data.img}
                      className='w-[26px] md:w-8 hover:scale-125 transition-all hover:bg-white rounded-full'
                      alt={data.id} />
                  </a>
                </div>
              ))
            }
          </div>
        </div>

        <div>
          {/* contact details ph and email */}
          <h3 className='text-yellow-500 font-medium text-[17px]'>Contack details</h3>
          <div>
            <p><span className='font-medium'>Address : </span> Ganeshapuram, Coimbatore, Tamilnadu, 641107 </p>
            <p><span className='font-medium'>Email ID : </span><a href="mailto:br2704581@gmail.com">br2704581@gmail.com</a></p>
            <p><span className='font-medium'>Phone no : </span>+91 9600619503</p>
          </div>
        </div>


      </div>

      <div className='flex justify-center items-center my-2 text-gray-300'>
        {/* copy right */}
        &copy;BoopathirajaS 2025
      </div>
    </div>
  )
}

export default Footer