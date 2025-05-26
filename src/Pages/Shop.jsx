import React from 'react';
import img6 from "../Images/image6.jpg"
import img7 from "../Images/image7.jpg"
import img8 from "../Images/image8.jpg"

const Shop = () => {
    const imagesshop = [
        {
            img: img6,
            content: "Shop For Men"
        },
        {
            img: img7,
            content: "Shop For WoMen"
        },
        {
            img: img8,
            content: "Shop Accessories"
        }
    ];
    const shop = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            ,
            content: "Book An Appoinment"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>,
            content: "Pick up in store"
        }
        , {
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            ,
            content: "Special packaging"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>,
            content: "Free Global Returns"
        }
    ];
    return (
        <div>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:justify-between justify-center '>
                {
                    shop.map((val, index) => (
                        <div key={index} className='flex flex-col mt-10 mb-10'>
                            <span className='flex justify-center hover:text-slate-400 cursor-pointer'>{val.svg}</span>
                            <h2 className=' flex justify-center my-1 font-display font-medium text-lg'>{val.content}</h2>
                            <p className='my-2 flex justify-center'><span className='w-2/3 text-center'>At imperdiet accumsa sit amet nulla risus est ultricies quis.</span></p>
                        </div>
                    ))
                }
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:justify-between justify-center gap-y-6'>
                {
                    imagesshop.map((image, index) => (
                        <div key={index} className='w-full h-full flex flex-col p-5'>
                            <div className=' overflow-hidden w-80 h-full'><img src={image.img} alt="sample" className=' border rounded-lg border-slate-500 w-80 h-full hover:transform hover:scale-125 transition ease-in-out duration-500' /></div>
                            <h2 className="relative inline-block group text-lg font-medium text-slate-600 mt-3 font-mono">
                                {image.content}
                                <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;