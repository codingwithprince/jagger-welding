import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return ( 
<> 
    
<div id="footer" className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between py-5">
        <a href="#home" className="flex items-center mb-4 sm:mb-0">
            <Image src="/images/logo/logo_jagger.png" className="mr-3 h-8" alt="jagger-welding Logo" width={50} height={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-3">Jagger-welding</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#pp" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#licence" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#contact" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://jagger-welding.com" className="hover:underline">Jagger d.o.o</a>. All Rights Reserved.
    </span>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-3 mb-5">Made By <a target='_' href="https://www.facebook.com/profile.php?id=100008591616145" className="hover:text-sky-500 underline">Prince</a> ❤️
    </span>
</div>

</>
  )
}

export default Footer