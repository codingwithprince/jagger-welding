import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineFileDone,
  AiOutlineClose,
  AiOutlineBars,
} from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FaPeopleCarry, FaBars } from "react-icons/fa";
import { IoIosConstruct, IoIosCloudDone } from "react-icons/io";
import { IoHome, IoLocationSharp } from "react-icons/io5";
import {
  MdWifiCalling3,
  MdPeopleAlt,
  MdPhotoSizeSelectActual,
} from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { RiGalleryLine } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [openNav, setOpenNav] = useState(false);

  let navItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <IoHome />,
    },
    {
      id: 2,
      name: "About",
      url: "#about",
      icon: <MdPeopleAlt />,
    },
    {
      id: 3,
      name: "Services",
      url: "#services",
      icon: <IoIosConstruct />,
    },
    {
      id: 4,
      name: "Gallery",
      url: "#gallery",
      icon: <MdPhotoSizeSelectActual />,
    },
    {
      id: 5,
      name: "Location",
      url: "#location",
      icon: <IoLocationSharp />,
    },
    {
      id: 6,
      name: "Contact",
      url: "#contact",
      icon: <MdWifiCalling3 />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-lg py-2 bg-white flex flex-wrap justify-between px-[5%] items-center">
      <div className="logo">
        <Image src="/images/logo/logo.png" height={40} width={40} alt="logo" />
      </div>

      <button
        onClick={() => setOpenNav(!openNav)}
        className={`block md:hidden text-2xl font-bold text-sky-600`}
      >
        {openNav ? <AiOutlineClose /> : <FaBars />}
      </button>

      <div
        onClick={() => setOpenNav(!openNav)}
        className={`menu ${
          openNav
            ? `absolute md:relative top-0 right-0 mt-[60px] bg-white rounded-md`
            : `hidden`
        } md:block sm:mt-0 `}
      >
        <ul className="uppercase py-2 px-10 cursor-pointer rounded-full text-gray-500 flex flex-col md:flex-row gap-5 sm:gap-10 text-md md:text-base">
          {navItems.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <li
                  onClick={() => setActive(item.name)}
                  className={` hover:text-sky-600 ${
                    active == item.name && `text-sky-600`
                  }  flex gap-3 md:gap-1  md:flex-col justify-start md:justify-center items-center animate duration-500 ease-in-out sm:my-0 my-2`}
                >
                  {item.icon}
                  <a>{item.name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
