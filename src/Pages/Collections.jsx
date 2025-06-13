import React, { useState, useEffect } from 'react';
import img15 from "../Images/image15.jpg";
import img16 from "../Images/image16.jpg";
import img17 from "../Images/image17.jpg";
import img18 from "../Images/image18.jpg";
import img12 from "../Images/image12.jpg";
import img13 from "../Images/image13.jpg";

const Collections = () => {
    const images = [
        {
            img: img16,
            content: "Dark Florish OnePiece",
            price: "$ 95.00"
        },
        {
            img: img17,
            content: "Baggy Shirt",
            price: "$ 205.00"
        },
        {
            img: img18,
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
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            (prevIndex + 4) % images.length
          );
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
        <div className='h-full w-full'>
            <div className='w-full h-min md:flex md:flex-row items-center bg-slate-300 flex-col mb-20'>
                <div className='md:w-2/4 h-3/4 flex w-full justify-center'><img src={img15} alt="imageCollection" className='w-11/12 md:w-full  h-full md:ml-10' />
                </div>
                <div className=' h-3/4 flex flex-col md:w-2/4 bg-white md:mr-10 md:p-10 w-full'>
                    <h2 className='md:text-3xl text-xl font-display w-full md:w-full xl:w-2/4 mb-1 md:mb-6  p-4'>Classic Winter Collection</h2>
                    <p className='mb-5 text-slate-600 md:leading-6 p-4'>Dignissim lacus, turpis, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>

                    <button type="button" class=" m-5 py-2 px-4 w-52 bg-black hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-medium font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md ">
                        Shop Collection
                    </button>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex justify-between mb-4'>
                    <h2 className='m-5 font-display font-medium md:text-3xl text-xl'>Best Selling Items</h2>
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
        </div>
    )
}

export default Collections;