import React from 'react'
import {Link} from 'react-router-dom'
import pic from '../img/pic.jpg'
const Hero = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
            grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 px-8 mt-0 pt-8 pb-20 md:pt-12">
              <div className="text-box mt-0 col-span-2  text-center md:text-left">
                <h1 className="text-gray-200 font-bold text-8xl ">PicGram</h1>
                <h3 className="text-gray-200 mt-4 text-lg font-semibod">Memories live forever</h3>
                <p className=" text-gray-200 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ut?</p>
                 <Link to = "/auth"><button className =" text-white transition duration-700 ease-in-out transform hover:scale-110
                  font-semibold
                  uppercase mt-4 bg-transparent
                   py-2 px-8 rounded-full ring-2 
                   ring-gradient-to-r from-purple-400 via-pink-500 to-red-500">Sign Up</button></Link>
              </div>
                <div className=" relative h-80   mt-3  justify-self-center items-center lg:mr-6">
                    <img className='w-full 
                    max-h-full overflow-hidden' src={pic} alt="" />
                     <img className='max-w-full absolute top-0  filter 
                    grayscale  origin-bottom-right transform rotate-45  translate-y-10 scale-50 overflow-hidden' src={pic} alt="" />
                    <img className='max-w-full absolute top-0 filter sepia 
                       origin-bottom-left transform -rotate-45   translate-y-10 scale-50 overflow-hidden' src={pic} alt="" /> 
                </div>
                


            </section>
                
            
        </>
    )
}

export default Hero
