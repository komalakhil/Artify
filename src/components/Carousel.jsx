import React from 'react'
import image1 from '../images/carousel_Images/image-1.jpg';
import image2 from '../images/carousel_Images/image-2.jpg';
import image3 from '../images/carousel_Images/image-3.jpg';
import image4 from '../images/carousel_Images/image-4.jpeg';
import image5 from '../images/carousel_Images/image-5.png';


export default function Carousel() {
  return (
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={image1} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={image2} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={image3} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src={image4} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
            <img src={image5} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
    </div>
  )
}
