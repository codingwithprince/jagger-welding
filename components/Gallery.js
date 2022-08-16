/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Marquee from "react-easy-marquee";

const Gallery = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

    const images = ["images/features/w-1.jpg", "images/features/w-2.jpg", "images/features/w-3.jpg", "images/features/w-4.jpg" , "images/features/w-3.jpg", "images/features/w-4.jpg"];
  return (
    <div id='gallery' className='bg-slate-100 py-10'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-5'>Gallery</h3>
        <div data-aos="fade-up" className='py-5 '>
            <Marquee duration={45000} height="250px" pauseOnHover={true}>
                {images.map((image, index) => (
                    <img  onClick={ () => openImageViewer(index) } className='shadow-md h-[200px] md:h-[400px] max-w-none object-cover mx-2' key={image} src={image} alt="picsum" />
                ))}
            </Marquee>
        </div>
        <div data-aos="fade-up" className='py-5'>
            <Marquee duration={55000} height='150px' pauseOnHover={true}>
                {images.map((image , index) => (
                    <img onClick={ () => openImageViewer(index) } className='shadow-md h-[150px] w-[350px] max-w-none object-cover mx-2' key={image} src={image} alt="picsum" />
                ))}
            </Marquee>
        </div>
        {isViewerOpen && (
        <div className='absolute mt-[100px]'>
            <ImageViewer
            backgroundStyle={{ 
              background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))',
              zIndex: '100'}}
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
            />
        </div>
      )}
  </div>
  )
}

export default Gallery