import React, { useState, useEffect } from 'react';
import img1 from "../Images/image1.jpg";
import img2 from "../Images/image2.jpg";
import img3 from "../Images/image3.jpg";
import img4 from "../Images/image4.jpg";
import img5 from "../Images/img5.jpg"
import Shop from './Shop';
import New from './New';
import Collections from './Collections';
import Quotes from './Quotes';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 3) % images.length
                );
                setFade(true);
            }, 3000);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const visibleImages = images.slice(currentIndex, currentIndex + 3);

    const displayedImages =
        visibleImages.length < 3
            ? [...visibleImages, ...images.slice(0, 3 - visibleImages.length)]
            : visibleImages;

    return (
        <div>
            <div className="contentDiv flex flex-col items-center my-8">
                <h2 className='text-6xl font-display text-center'>New Collections </h2>
                <p className='my-5 sm:w-3/6 w-11/12 text-center'>Discover stylish, affordable, and high-quality products at your fingertips. From fashion essentials to cutting-edge gadgets, explore the latest trends and enjoy seamless shopping, fast delivery, and unbeatable prices — all in one place.</p>
            </div>
            <div className={`images flex px-10 gap-5 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} sm:flex hidden bg-slate-300 p-20`}>
                {
                    displayedImages.map((image, index) => (
                        <div key={index}>
                            <div className=' overflow-hidden'><img src={image} alt="sample" className=' border rounded-lg border-slate-500 w-96 h-2/3 hover:transform hover:scale-125 transition ease-in-out duration-500' /></div>
                            <h2 className="relative inline-block group text-lg font-semibold mt-3">
                                Soft Leather Jackets
                                <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
                            </h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas fugiat, vitae recusandae voluptatibus quos?</p>
                            <span className='relative inline-block group text-md font-light mt-2'>Discover Now <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span></span>
                        </div>
                    ))
                }
            </div>
            <div className={`images flex px-10 gap-5 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} sm:hidden`}>
                <div>
                    <div className=' overflow-hidden'><img src={images[currentIndex]} alt="sample" className='w-96 h-2/3 hover:transform hover:scale-125 transition ease-in-out duration-500' /></div>
                    <h2 className="relative inline-block group text-lg font-semibold mt-2">
                        Soft Leather Jackets
                        <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
                    </h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas fugiat, vitae recusandae voluptatibus quos?</p>
                    <span className='relative inline-block group text-md font-semibold mt-2'>Discover Now <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span></span>
                </div>
            </div>
            <Shop />
            <New />
            <Collections />
            <Quotes />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home;