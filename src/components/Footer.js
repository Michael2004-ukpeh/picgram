import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-800 py-4 pt-6 px-8 w-full mt-0 text-white  '>
            <h2 className="font-semibold text-xl">Useful Links</h2>
            <div className="flex  flex-col md:grid md:grid-cols-3 gap-3 ">
                <ul>
                    <li>About</li>
                    <li>Login</li>
                    <li>Terms and Conditions</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li></li>
                </ul>
                <div className="email ">
                    <input className="px-4 py-1.5 outline-none bg-transparent border-b-2" type="email" placeholder='Suscribe to our Newsletter'/>
                    <button className="ml-2 bg-red-600 px-4 py-2 rounded-lg transition duration-500 ease-in-out transform hover:scale-110">Subscribe</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
