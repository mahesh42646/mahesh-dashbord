import React from 'react'
import Footer from './Footer';
function About() {
 
        const url = 'https://www.linkedin.com/in/mahesh-darkunde-095479237/';
  return (
    <>

    <div className="pt-20 text-yellow-200  md:px-52 px-3 bg-cover" style={{ backgroundImage: `url('./purple.avif')` }}>
    
  <div class="container ">

{/* <!-- Personal Information --> */}
<div className="flex">
<div class="mb-8 w-full">
  <h1 class="text-3xl md:text-4xl font-bold mt-10 font-sans text-orange-400">Mahesh Darkunde</h1>
  
  <p class="text-lg text-end text-white-700">maheshdarkunde2@gmail.com </p> 
  <p class="text-lg  text-end text-white-700">8381048543</p>
  <p class="text-lg  text-end text-white-700">Pune, INDIA</p>
  <a href={url} target="_blank" rel="noopener noreferrer" className="w-10">
  <p class="text-lg  text-end text-white-700 text-blue-500 hover:underline overflow-hidden"> linkedin</p></a>
  <p class="text-lg  text-end text-white-700">Github</p>
</div>
<div className="md:mt-20 mt-20 md:py-1 py-10">
  <img src="./email.png" className="h-5 px-2 py-1" alt="" />
  <img src="./phone.png" className="h-5 pl-2 pt-1" alt="" />
  <img src="./location.png" className="h-5 w-7 pl-1 mt-3" alt="" />
  <img src="./linkedin.png" className="h-4 pl-2 mt-3" alt="" />
  <img src="./git.png" className="h-4 pl-2 mt-3" alt="" />
</div>
</div>
</div>  
<div className=" md:flex">
<div>{/* <!-- Summary --> */}
<div class="mb-8">
  <h2 class="text-2xl text-white font-bold mb-2">Summary</h2>
  <p class="text-lg text-white-700 overflow-hidden">
    Highly motivated and dedicated React Frontend developer with a   strong <br /> academic background  and a passion for software development.<br /> 
     Eager to contribute knowledge, problem-solving  skills, and a  strong   work ethic to <br /> a dynamic development team.
  </p>
</div>

{/* <!-- Projects --> */}
<div class="mb-8">
  <h2 class="text-2xl text-white font-bold mb-2">Projects</h2>
 

  {/* <!-- Project 1 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">Student Management System</h3> <i className='text-yellow-100'>Collage Projects</i>
    <p class="text-lg text-white-700">
      A digital platform for efficiently managing student data, including enrollment, <br /> attendance,  and grades. Improved communication and organization within educational institutions.
    </p>
  </div>

  {/* <!-- Project 2 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">Ecommerce Website</h3>
    <p class="text-lg text-white-700">
      Developed a versatile Ecommerce Website with intuitive navigation, secure payment processing, and personalized product recommendations.
    </p>
  </div>
</div>

{/* <!-- Work Experience --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold text-white mb-2">Work Experience</h2>

  {/* <!-- Experience 1 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">WebDeveloper (Internship) </h3><i className='text-yellow-100'>Tectiq Technology </i>
    <p class="text-lg text-white-700">
      Company Website Enhancement project focused on transforming the existing website into a powerful and  engaging platform.

    </p>
  </div>
</div>
</div>
<div className="pl-10">
{/* <!-- Skills --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2 text-white">Skills</h2>
  <div class="flex flex-wrap">
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">JavaScript</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">React.js</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">Angular.ts</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">HTML</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">CSS</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">Tailwind CSS</span>
    <span class=" border text-white px-3 py-1 mx-2 my-1  bgcard rounded">Ionic framework</span>
    {/* <!-- Add more skills as needed --> */}
  </div>
</div>

{/* <!-- Education --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2 text-white">Education</h2>
  <p class="text-lg text-white-700">Bachelor of Computer Science (2023)</p>
  <p class="text-lg text-white-700">B.P.H.E. Society Ahmednagar College, Ahmednagar. Aggregate: 8.28</p>
</div>



{/* <!-- Interests --> */}
<div class="pb-2">
  <h2 class="text-2xl font-bold mb-2 text-white">Interests</h2>
  <ul class="list-disc list-inside">
    <li class="text-lg text-white-700">Web Designing</li>
    <li class="text-lg text-white-700">Cricket</li>
    <li class="text-lg text-white-700">Swimming</li>
  </ul>
</div></div>

</div>
</div>
<Footer/>
   </>
  )
}

export default About