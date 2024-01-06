import React from 'react'
import Footer from './Footer';
function About() {
 
        const url = 'https://www.linkedin.com/in/mahesh-darkunde-095479237/';
  return (
    <>
    <div className="pt-20 md:px-32 px-3">
    
  <div class="container ">

{/* <!-- Personal Information --> */}
<div className="flex">
<div class="mb-8 w-full">
  <h1 class="text-3xl md:text-4xl font-bold mb-2">Mahesh Darkunde</h1>
  <p class="text-lg text-end text-gray-700">maheshdarkunde2@gmail.com </p> 
  <p class="text-lg  text-end text-gray-700">8381048543</p>
  <p class="text-lg  text-end text-gray-700">Pune, INDIA</p>
  <a href={url} target="_blank" rel="noopener noreferrer" className="">
  <p class="text-lg  text-end text-gray-700 text-blue-500 hover:underline overflow-hidden"> linkedin</p></a>
  <p class="text-lg  text-end text-gray-700">Github</p>
</div>
<div className="mt-12 py-1">
  <img src="./email.png" className="h-6" alt="" />
  <img src="./phone.png" className="h-5 pl-2 pt-1" alt="" />
  <img src="./location.png" className="h-4 pl-2 mt-2" alt="" />
  <img src="./linkedin.png" className="h-4 pl-2 mt-4" alt="" />
  <img src="./git.png" className="h-4 pl-2 mt-4" alt="" />
</div>
</div>
</div>  
<div className=" md:flex">
<div>{/* <!-- Summary --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Summary</h2>
  <p class="text-lg text-gray-700 overflow-hidden">
    Highly motivated and dedicated React Frontend developer with a   strong <br /> academic background  and a passion for software development.<br /> 
     Eager to contribute knowledge, problem-solving  skills, and a  strong   work ethic to <br /> a dynamic development team.
  </p>
</div>

{/* <!-- Projects --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Projects</h2>
 

  {/* <!-- Project 1 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">Student Management System</h3>
    <p class="text-lg text-gray-700">
      A digital platform for efficiently managing student data, including enrollment, <br /> attendance,  and grades. Improved communication and organization within educational institutions.
    </p>
  </div>

  {/* <!-- Project 2 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">Ecommerce Website</h3>
    <p class="text-lg text-gray-700">
      Developed a versatile Ecommerce Website with intuitive navigation, secure payment processing, and personalized product recommendations.
    </p>
  </div>
</div>

{/* <!-- Work Experience --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Work Experience</h2>

  {/* <!-- Experience 1 --> */}
  <div class="mb-4">
    <h3 class="text-xl font-bold mb-2">WebDeveloper (Internship)</h3>
    <p class="text-lg text-gray-700">
      Company Website Enhancement project focused on transforming the existing website <br /> into a powerful and br engaging platform.
    </p>
  </div>
</div>
</div>
<div>
{/* <!-- Skills --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Skills</h2>
  <div class="flex flex-wrap">
    <span class="bg-blue-500 text-white px-3 py-1 m-1 rounded">React</span>
    <span class="bg-blue-500 text-white px-3 py-1 m-1 rounded">HTML</span>
    <span class="bg-blue-500 text-white px-3 py-1 m-1 rounded">CSS</span>
    <span class="bg-blue-500 text-white px-3 py-1 m-1 rounded">Tailwind CSS</span>
    {/* <!-- Add more skills as needed --> */}
  </div>
</div>

{/* <!-- Education --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Education</h2>
  <p class="text-lg text-gray-700">Bachelor of Computer Science (2023)</p>
  <p class="text-lg text-gray-700">B.P.H.E. Society Ahmednagar College, Ahmednagar. Aggregate: 8.28</p>
</div>

{/* <!-- Certificates --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Certificates</h2>
  <p class="text-lg text-gray-700">Full Stack Websites with PHP Web Development (09/2023) - Infosys</p>
  <p class="text-lg text-gray-700">Fullstack Web Developer (03/2023) - AutomationEdge (Pune)</p>
</div>

{/* <!-- Interests --> */}
<div class="mb-8">
  <h2 class="text-2xl font-bold mb-2">Interests</h2>
  <ul class="list-disc list-inside">
    <li class="text-lg text-gray-700">Web Designing</li>
    <li class="text-lg text-gray-700">Cricket</li>
    <li class="text-lg text-gray-700">Swimming</li>
  </ul>
</div></div>

</div>
</div>
<Footer/>
   </>
  )
}

export default About