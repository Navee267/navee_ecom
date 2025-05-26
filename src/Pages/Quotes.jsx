import React from 'react'

const Quotes = () => {
    const feedbacks = [
        "Confident pose and graceful expression—captivating presence on camera.",
        "Excellent posture and style—commands attention in every frame.",
        "Natural elegance shines through—very photogenic and camera-ready look."
    ];
    return (
        <div>
            <div className='w-full h-full bg-slate-300 p-20'>
                <h3 className='text-3xl font-medium font-display mb-10 mt-10 text-center'>We Love Good Compliment</h3>
                <div className='justify-around grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-7'>
                    {
                        feedbacks.map((fb, index) => (
                            <div key={index} className='flex flex-col'>
                                <h2 className='w-96 text-center text-2xl'>" {fb} "</h2>
                                <h3 className=' text-center mt-5 font-mono font-normal text-xl'>SomeOne</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Quotes