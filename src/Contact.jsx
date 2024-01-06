import React from 'react'
import Footer from './Footer';
function Contact() {
 
  const url = 'https://www.linkedin.com/in/mahesh-darkunde-095479237/';
  return (<>
    <div className="pt-20 md:px-72">
<div className="flex">
<div class="mb-8 w-full">
  <h1 class="text-3xl md:text-4xl font-bold mt-10 font-sans text-orange-400">Mahesh Darkunde</h1>
  
  <p class="text-lg text-end text-white-700">maheshdarkunde2@gmail.com </p> 
  <p class="text-lg  text-end text-white-700">8381048543</p>
  <p class="text-lg  text-end text-white-700">Pune, INDIA</p>
  <a href={url} target="_blank" rel="noopener noreferrer" className="">
  <p class="text-lg  text-end text-white-700 text-blue-500 hover:underline overflow-hidden"> linkedin</p></a>
  <p class="text-lg  text-end text-white-700">Github</p>
</div>
<div className="md:mt-20 mt-14 md:py-1 py-7">
  <img src="./email.png" className="h-5 px-2 py-1" alt="" />
  <img src="./phone.png" className="h-5 pl-2 pt-1" alt="" />
  <img src="./location.png" className="h-5 w-7 pl-1 mt-3" alt="" />
  <img src="./linkedin.png" className="h-4 pl-2 mt-3" alt="" />
  <img src="./git.png" className="h-4 pl-2 mt-3" alt="" />
</div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact