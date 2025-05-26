import React, { useState, useEffect } from 'react';
import img9 from "../Images/image9.jpg";
import img10 from "../Images/image10.jpg";
import img11 from "../Images/image11.jpg";
import img12 from "../Images/image12.jpg";
import img13 from "../Images/image13.jpg";

const New = () => {
  const images = [
    {
      img: img9,
      content: "Dark Florish OnePiece",
      price: "$ 95.00"
    },
    {
      img: img10,
      content: "Baggy Shirt",
      price: "$ 205.00"
    },
    {
      img: img11,
      content: "Cotton off White Shirt",
      price: "$ 195.00"
    },
    {
      img: img12,
      content: "Crop Sweater",
      price: "$ 195.00"
    },
    {
      img: img13,
      content: "Crop Sweater",
      price: "$ 80.00"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 4) % images.length
        );
        setFade(true);
      }, 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  const displayedImages =
    visibleImages.length < 4
      ? [...visibleImages, ...images.slice(0, 4 - visibleImages.length)]
      : visibleImages;
  return (
    <div className='mt-10'>
      <div className='flex justify-between mb-4'>
        <h2 className='m-5 font-display font-medium md:text-3xl text-xl'>Our New Arrivals</h2>
        <div className='flex'>
          <h3 className="relative inline-block group text-lg font-medium text-slate-600 font-mono m-5">
            View All Products
            <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
          </h3>
        </div>
      </div>
      <div className=' w-full grid justify-center space-y-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-10'>
        {
          displayedImages.map((image, index) => (
            <div key={index} className='w-80 h-3/4 px-3 group relative'>
              <div className=' overflow-hidden '><img src={image.img} alt="sample" className=' border rounded-lg border-slate-500 w-80 h-3/5 hover:transform hover:scale-125 transition ease-in-out duration-500' /></div>
              <h2 className="relative inline-block group text-lg font-medium text-slate-600 mt-3 font-mono ">
                {image.content}
                <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
              </h2>
              <span className='block group-hover:hidden transform ease-in-out duration-100  mb-2 mt-2'>{image.price}</span>
              <span className=' hidden group-hover:block transform ease-in-out duration-100  mb-3 pt-3 hover:cursor-pointer'>Add To Cart</span>
              <span className='group-hover:block hidden transform ease-in-out duration-300 absolute top-3 right-5 border border-slate-200 bg-slate-300 px-2 py-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg></span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default New