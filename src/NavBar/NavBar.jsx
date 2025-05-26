import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const menu = () => {
        setShow(!show);
    }
    return (
        <>
            <nav className=' flex justify-between w-full h-20 border-b-2'>
                <div className='flex my-4 mx-4 text-slate-800 text-4xl font-display font-bold'><h1>Navee</h1></div>
                <div className='flex md:hidden my-6 mx-7'>
                    <span className='spansty flex px-1 py-1 hover:shadow-md hover:border rounded-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-7 w-10 text-center" onClick={menu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></span>
                </div>
                <div className='hidden md:block uppercase my-6'>
                    <ul className='md:flex md:space-x-8 space-y-8 md:space-y-0 sm:hidden'>
                        <li className='liststy'><Link to={"/"}>Home</Link></li>
                        <li className='liststy'><Link to={"/shop"}>shop</Link></li>
                        <li className='liststy'><Link to={"/blog"}>Blog</Link></li>
                        <li className='liststy'><Link to={"/collections"}>Collections</Link></li>
                        <li className='liststy'><Link to={"/contact"}>contact</Link></li>
                    </ul></div>
                <div className=' my-6 hidden lg:flex'>
                    <span className='spansty'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    </span>
                    <span className='spansty'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </span>
                    <span className='spansty'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </span>
                </div>
            </nav>
            <div className={`${show ? 'flex' : 'hidden'} md:hidden sm:flex uppercase bg-slate-500 transform transition ease-in-out duration-500`}><ul className=' flex '>
                <li className='liststy'><Link to={"/"}>Home</Link></li>
                <li className='liststy'><Link to={"/shop"}>shop</Link></li>
                <li className='liststy'><Link to={"/blog"}>Blog</Link></li>
                <li className='liststy'><Link to={"/collections"}>Collections</Link></li>
                <li className='liststy'><Link to={"/contact"}>contact</Link></li>
            </ul></div>
        </>
    )
}

export default NavBar