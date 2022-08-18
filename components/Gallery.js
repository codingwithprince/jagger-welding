/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback } from 'react';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import Slider from "react-slick";
import ImageViewer from 'react-simple-image-viewer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  const gallery = [
    '/images/gallery/g1.JPG',
    '/images/gallery/g2.JPG',
    '/images/gallery/g3.JPG',
    '/images/gallery/g4.JPG',
    '/images/gallery/g5.JPG',
    '/images/gallery/g6.JPG',
    '/images/gallery/g7.JPG',
    '/images/gallery/g8.JPG',
    '/images/gallery/g9.JPG',
    '/images/gallery/g10.JPG',
    '/images/gallery/g12.JPG',
    '/images/gallery/g13.JPG',
    '/images/gallery/g14.JPG',
    '/images/gallery/g15.JPG',
    '/images/gallery/g16.JPG',
    '/images/gallery/g17.JPG',
    '/images/gallery/g18.JPG',
  ]


  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 return (
    <div id='gallery' className='bg-slate-100 py-5 overflow-x-hidden'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-5'>Gallery</h3>
        <div className="py-5">
          <Slider {...settings}>
              {gallery.map((image , index) => (
                    <div key={index} className='overflow-x-hidden'>
                      <Image width={600} height={420} onClick={ () => openImageViewer(index) } className='shadow-md object-cover' key={image} src={image} alt="picsum" />
                    </div>
                ))}
          </Slider>
        </div>
        <div className='px-2'>
            <Marquee speed={10} pauseOnHover={true} gradient={false} direction='right'>
                {gallery.map((image , index) => (
                    <div key={index} className='p-2'>
                      <Image width={250} height={130} onClick={ () => openImageViewer(index) } className='shadow-md object-cover' key={image} src={image} alt="picsum" />
                    </div>
                ))}
            </Marquee>
        </div>   
        {isViewerOpen && (
        <div className='absolute mt-[100px]'>
            <ImageViewer
            backgroundStyle={{ 
              background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))',
              zIndex: '100'}}
            src={ gallery }
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