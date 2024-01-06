// Project1.jsx
import React from 'react';
import Footer from './Footer';
import ProjectList from './ProjectList';

const projectData = [
  { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/111/9780670097111.jpg', text: 'Doglapan ',mrp: '500' },
  { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/676/9780143452676.jpg', text: 'Project' ,mrp: '400'},
  { imageSrc: '  https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/566/9789389480566.jpg', text: 'Project' ,mrp: '700'},
 { imageSrc: 'https://www.bookswagon.com/productimages/images200/368/9781501110368.jpg', text: 'book name ',mrp: '400'},
 { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg', text: 'book name ',mrp: '200'},
 { imageSrc: 'https://www.bookswagon.com/productimages/images200/895/9781786330895.jpg', text: 'book name ',mrp: '300'},
 { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/197/9780138199197.jpg', text: 'book name ',mrp: '500'},
 { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/201/9780008627201.jpg', text: 'book name ',mrp: '600'},
 { imageSrc: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/659/9781098136659.jpg', text: 'book name ',mrp: '500'},
 { imageSrc: 'https://www.bookswagon.com/productimages/images200/679/9781482254679.jpg', text: 'book name ',mrp: '300'},
//  { imageSrc: 'https://www.bookswagon.com/productimages/images200/679/9781482254679.jpg', text: 'book name ',mrp: '200'},

];

function Project1() {
  return (
    <>
      <ProjectList />
      <div className="px-12 md:px-32 py-6 grid md:grid-cols-5">
        {projectData.map((project, index) => (
          <div key={index} className="transparent h-96 md:m-1 rounded-2xl p-6 col-span-1">
            <img className="h-72 w-full" src={project.imageSrc} alt={`Project ${index + 1}`} />
            <p>{project.text}</p> <p className="text-2xl">{project.mrp}</p>

          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Project1;
