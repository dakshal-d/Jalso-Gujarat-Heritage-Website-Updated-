import React from 'react'
import Carousal from './Carousal'

function Hero(){
    return (
        <section className="bg-white dark:bg-gray-900 mt-20 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-40 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className=" p-4 bg-gray-100 rounded-xl mr-16 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white">Get best Travel and Food in <span className='text-blue-600 '>Gujarat</span> </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience the vibrant colors and flavors of Gujarat through its rich cuisine and enchanting destinations, where every bite and every sight is a journey to remember.</p>
                    <div className='flex space-x-4'>
                        <a href='./Travel' class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Travel
                        </span>
                        </a>
                        <a href='./food' class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Food
                        </span>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                <iframe title='Youtube Video' className='rounded shadow-2xl' width="420" height="330"
                src="https://www.youtube.com/embed/15Jj8QEqCK4" alt="Youtube Video">
                </iframe>
                </div>
            </div>

            <Carousal />
        </section>
    )
}

export default Hero