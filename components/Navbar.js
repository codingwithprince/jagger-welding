import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome} from 'react-icons/ai'
import { FaPeopleCarry } from 'react-icons/fa'
import { IoIosConstruct, IoIosCloudDone } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { MdWifiCalling3, MdPeopleAlt } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'



const Navbar = () => {
    const [active, setActive] = useState('Home')
   
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
            name: 'Jobs',
            url: '#jobs',
            icon: <IoIosConstruct />
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
            url: '#contact',
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
    <nav className='py-2 flex flex-wrap justify-between px-[5%] shadow-sm items-center'>
        <div className="logo">
            <Image src='/images/logo/logo_jagger.png' height={50} width={50} alt='logo' />
        </div>
        <div className='menu'>
            <ul className='uppercase py-2 px-10 absolute cursor-pointer sm:relative rounded-full text-gray-600 flex flex-col sm:flex-row gap-5 sm:gap-10 text-2xl md:text-base'>
                    {
                    navItems.map((item)=> { 
                        return (
                        <Link  href={item.url} key={item.id}>
                            <li onClick={()=> setActive(item.name)} className={`font-semibold hover:text-blue-600 ${active == item.name && `text-blue-600`} hover:font-semibold flex gap-3 md:gap-1  md:flex-col justify-start md:justify-center items-center animate duration-500 ease-in-out sm:my-0 my-2`}>
                                {item.icon}
                                <a>{item.name}</a>
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