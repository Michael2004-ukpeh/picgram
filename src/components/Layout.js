import React from 'react'
import Header from "./Header"
import Footer from './Footer'
const Layout = (props) => {
    return (
        <div className="position-relative ">
        <Header/>
       <main className="mt-16 w-full pt-0  ">
           
           {props.children}
        
           </main>
           <Footer/>
        </div>
    )
}

export default Layout
