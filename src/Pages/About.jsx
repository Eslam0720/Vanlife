import React from "react"

function About() {
    return(
    <>
        <div className='grid justify-items-center-safe '>
            <div className='text-center my-5'>
                <img className='w-screen h-120' src='/about.png' />
                <h1 className='text-bold mt-3 text-3xl'>Don't squeeze in a sedan when you could relax in a van.</h1>
                <h3 className='text-bold mt-4'>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉) <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </h3>
                <div className='bg-orange-300 grid justify-items-start p-5 justify-self-center w-160 rounded-xl mb-5'>
                    <h2 className='text-2xl text-extrabold my-2'>Your destination is waiting.</h2>
                    <h2 className='text-2xl text-extrabold my-2'>Your van is ready.</h2>
                    <button className='bg-black text-white text-center rounded-2xl p-4 mt-3'>Explore our vans</button>
                </div>
            </div>
        </div>
    </>
    )
}


export default About