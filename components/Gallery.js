/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback } from 'react';
import Marquee from "react-fast-marquee";
import ImageViewer from 'react-simple-image-viewer';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

    const images = ["images/features/w-1.jpg", "images/features/w-2.jpg", "images/features/w-3.jpg", "images/features/w-4.jpg" , "images/features/w-3.jpg", "images/features/w-4.jpg"];
  return (
    <div id='gallery' className='bg-slate-100 py-10'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-5'>Gallery</h3>
        <div data-aos='fade-up' className='py-5'>
            <Marquee speed={30} pauseOnHover={true} gradient={false} direction='right'>
                {images.map((image , index) => (
                    <img onClick={ () => openImageViewer(index) } className='shadow-md h-[200px] md:h-[300px] max-w-none object-cover mx-2' key={image} src={image} alt="picsum" />
                ))}
            </Marquee>
        </div>     
        <div data-aos='fade-up' className='py-5'>
            <Marquee speed={20} pauseOnHover={true} gradient={false} direction='right'>
                {images.map((image , index) => (
                    <img onClick={ () => openImageViewer(index) } className='shadow-md h-[100px] md:h-[200px] max-w-none object-cover mx-2' key={image} src={image} alt="picsum" />
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