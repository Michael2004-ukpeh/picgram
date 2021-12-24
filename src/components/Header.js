import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className = "top-0 right-0 left-0  py-4 px-7 bg-gray-900 text-white fixed font-sans w-full flex justify-between items-center border-b-2 border-black z-100">
            <div>
           <Link to = '/'> <h1 className="text-2xl font-extrabold">PicGram</h1></Link>
            </div>
            <nav>
                <ul className="flex">
                  <li className="li"><Link to='/auth' className='list'>Login</Link></li>
                  <li className="li"><Link to = '/profile'className="list">Profile</Link></li>
                  <li className="li"><Link to ="/" className="list">Logout</Link></li> 
                </ul>
            </nav>
        </header>
    )
}
export default Header
