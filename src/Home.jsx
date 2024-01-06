import React from 'react'
import Footer from './Footer'

function Home() {
  return (
    <>
    <div className="pt-20 text-white h-screen  md:px-32 px- md:flex bg-cover md:ml-1 mr-2 " style={{ backgroundImage: `url('./purple.avif')` }}>
<div className="     px-3 pt-32 pb-8  text-center md:w-1/2 z-20">

<h1 className="text-3xl" >Welcome to My World!</h1>
<h1 className="text-3xl" ><span  className="text-2xl" >Hi, I'm</span> <br /> 
<span className="text-orange-500 font-sans text-5xl">MAHESH DARKUNDE</span> ,<br /> A Web Developer.</h1>
<p className="text-4xl text-yellow-200" >I Enjoy Designing Tech Websites and Digital Products.</p>


</div>

    
<div className="     px-32   pt-6 pb-8   md:w-1/2">
<img  className=" h-96" src="\mahesh.png" alt="MAHESH" /><hr />
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Home