import React from 'react';
import img19 from "../Images/image19.jpg";
import img20 from "../Images/image20.jpg";
import img21 from "../Images/image21.jpg";

const Blog = () => {
    const images = [
        {
          img: img19,
          content: "How to look outstanding in pastel",
        },
        {
          img: img20,
          content: "Top 10 fashion trend for summer"
        },
        {
          img: img21,
          content: "Crazy fashion with unique moment",
        }
      ];
  return (
    <div className='mt-10'>
    <div className='flex justify-between mb-4'>
      <h2 className='m-5 font-display font-medium md:text-3xl text-xl uppercase'>Read Blog Posts</h2>
      <div className='flex'>
        <h3 className="relative inline-block group text-lg font-medium text-slate-600 font-mono m-5 uppercase">
          View All
          <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500"></span>
        </h3>
      </div>
    </div>
    <div className=' w-full grid justify-center space-y-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-10'>
      {
       images.map((image, index) => (
          <div key={index} className='w-full h-4/5  px-3 group'>
            <div className=' overflow-hidden '><img src={image.img} alt="sample" className=' border rounded-lg border-slate-500 w-full h-4/5 hover:transform hover:scale-125 transition ease-in-out duration-500' /></div>
            <span className='block text-slate-400 transform ease-in-out duration-100  mb-2 mt-2'>Fashion / jul 11, 2022</span>
            <h2 className="relative inline-block group text-lg font-medium text-slate-600 mt-3 font-mono ">
              {image.content}
              <span className=" left-0 bottom-0 h-[2px] bg-black w-full transition-all duration-500"></span>
            </h2>
            <span className='block transform ease-in-out duration-100  mb-2 mt-2 text-slate-500 '>Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</span>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Blog