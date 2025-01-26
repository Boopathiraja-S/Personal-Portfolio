import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [show])

    return (
        <div>
            {/* desktop or medium screen */}
            <div className='hidden md:flex z-50 bg-stone-800 justify-between 
            items-center shadow shadow-stone-500 px-3 fixed w-full overflow-hidden 
            mb-5 border-b border-b-stone-700'>
                <Link
                    to='home'
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    id='logo'
                    onClick={() => setShow(false)}
                >
                    <img src={logo} alt="logo" className='w-20 cursor-pointer' />
                </Link>

                <div className='flex items-center justify-center gap-5'>
                    <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}>Home
                    </Link>

                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}
                    >About
                    </Link>

                    <Link
                        activeClass='active'
                        to='projects'
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}
                    >Projects
                    </Link>

                    <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}>Contact
                    </Link>
                </div>
            </div>

            {/* mobile version */}

            <div className={`md:hidden ${show ? "" : "flex justify-between"} 
            z-50 items-center fixed w-full overflow-hidden bg-stone-800 shadow shadow-white
            border-b border-b-stone-600`}>
                {/* logo div */}
                <div>
                    <Link
                        to='home'
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}
                        id='logo'
                        onClick={() => setShow(false)}
                    >
                        <img src={logo} alt="logo" className='w-20 cursor-pointer' />
                    </Link>
                </div>

                {/* nav div */}
                <div className=''>
                    <RiMenu2Line className='text-3xl absolute right-4 top-5 hover:scale-110 hover:text-white text-gray-300 transition-all cursor-pointer'
                        onClick={() => setShow(!show)} />
                    <div className='flex items-center justify-center mx-auto'>
                        {
                            show && (
                                <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
                                    <Link
                                        activeClass='active'
                                        to='home'
                                        spy={true}
                                        offset={-100}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setShow(!show)}
                                    >Home
                                    </Link>

                                    <Link
                                        activeClass='active'
                                        to='about'
                                        spy={true}
                                        offset={-100}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setShow(!show)}
                                    >About
                                    </Link>

                                    <Link
                                        activeClass='active'
                                        to='projects'
                                        spy={true}
                                        offset={-100}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setShow(!show)}
                                    >Projects
                                    </Link>

                                    <Link
                                        activeClass='active'
                                        to='contact'
                                        spy={true}
                                        offset={-100}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setShow(!show)}
                                    >Contact
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header