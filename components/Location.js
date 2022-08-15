import React from 'react'

const Location = () => {
  return (
    <div id="location" className='services py-[20px] pb-[50px] px-[5%] bg-slate-100'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Location</h3>
        <div className="text-center w-full">
        <div className="text-location">
                <p data-aos="fade-up" className='text-2xl text-sky-700 font-bold underline'>Jagger d.o.o.</p>
                <p data-aos="fade-up" className='text-md bg-yellow-200 font-semibold py-1 my-10 text-gray-700'>Meljska cesta 36 <br />
                    2000 Maribor <br />
                    Slovenia</p>
             </div>
             <iframe data-aos="fade-up" className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.353539531223!2d15.661212415841105!3d46.56047357912917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f77039e216d55%3A0xf4b50d3dbf0007df!2sJagger%2C%20proizvodno%20in%20storitveno%20podjetje%2C%20d.o.o.!5e0!3m2!1sen!2sbd!4v1660487045779!5m2!1sen!2sbd"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
    </div>
  )
}

export default Location