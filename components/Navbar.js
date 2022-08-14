import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome, AiOutlineClose, AiOutlineBars} from 'react-icons/ai'
import { BsFillGearFill } from 'react-icons/bs'
import { FaPeopleCarry, FaBars } from 'react-icons/fa'
import { IoIosConstruct, IoIosCloudDone } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { MdWifiCalling3, MdPeopleAlt } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'




const Navbar = () => {
    const [active, setActive] = useState('Home')
    const [openNav, setOpenNav] = useState(false)
   
    let navItems = [
        {
            id:1,
            name: 'Home',
            url: '/',
            icon: <IoHome />,
        },
        {
            id:2,
            name: 'Portfolio',
            url: '#portfolio',
            icon: <IoIosCloudDone />,
        },
        {
            id:3,
            name: 'Services',
            url: '#services',
            icon: <BsFillGearFill />
        },
        {
            id:4,
            name: 'Workers',
            url: '#workers',
            icon: <FaPeopleCarry />
        },
        {
            id:5,
            name: 'Contact',
            url: '#footer',
            icon: <MdWifiCalling3 />
        },
        {
            id:6,
            name: 'About',
            url: '#about',
            icon: <MdPeopleAlt />
        }
    ]
   
  return (
    <nav className='sticky top-0 z-50 shadow-lg py-2 bg-white flex flex-wrap justify-between px-[5%] items-center'>
        <div className="logo">
            <Image src='/images/logo/logo_jagger.png' height={40} width={40} alt='logo' />
        </div>

        <button onClick={()=> setOpenNav(!openNav)} className={`block md:hidden text-2xl font-bold text-sky-600`}>
            {openNav ? <AiOutlineClose /> :   <FaBars />}
        </button>
 
        <div onClick={()=> setOpenNav(!openNav)} className={`menu ${openNav ? `absolute md:relative top-0 right-0 mt-[60px] bg-white rounded-md` : `hidden`} md:block sm:mt-0 `}>
            <ul className='uppercase py-2 px-10 cursor-pointer rounded-full text-gray-500 flex flex-col md:flex-row gap-5 sm:gap-10 text-md md:text-base'>
                    {
                    navItems.map((item)=> { 
                        return (
                        //     <Link
                        //     key={item.id}
                        //     activeClass="active"
                        //     to={item.url}
                        //     spy={true}
                        //     smooth={true}
                        //     offset={-100}
                        //     duration={400}>
                        //        <li onClick={()=> setActive(item.name)} className={`font-semibold hover:text-sky-600 ${active == item.name && `text-sky-600`} hover:font-semibold flex gap-3 md:gap-1  md:flex-col justify-start md:justify-center items-center animate duration-500 ease-in-out sm:my-0 my-2`}>
                        //          {item.icon}
                        //             <a >{item.name}</a>
                        //         </li>
                        //    </Link>
                        <Link  href={item.url} key={item.id}>
                            <li onClick={()=> setActive(item.name)} className={`font-semibold hover:text-sky-600 ${active == item.name && `text-sky-600`} hover:font-semibold flex gap-3 md:gap-1  md:flex-col justify-start md:justify-center items-center animate duration-500 ease-in-out sm:my-0 my-2`}>
                                {item.icon}
                                <a >{item.name}</a>
                            </li>
                        </Link>
                        )}
                    )}
            </ul>
        </div>
    </nav>

  )
}

export default Navbar