import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  '/ProductpagePics/img4.jpeg',
  '/ProductpagePics/img10.jpeg',
  '/ProductpagePics/img11.jpeg',
 
];



const Slideshow = () => {
 
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            < img src={fadeImages[0]} />
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            < img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            < img src={fadeImages[2]} />
          </div>
          </div>
         
        
      </Fade>

      < img src="/AboutMePics/2.jpg" />
      < img src="/ProductpagePics/image5.jpeg" />
      < img src="/ProductpagePics/img121.jpeg" />
      <li>Jaylen Raynor East Forsyth High School! </li>
      <li>Jersey #: 1</li>
    <li>  Positions: QB </li>
     <li> Height & Weight: 6'1" 200lbs </li>
     <li> Class of: 2023 </li>
      
    </div>
  )}

export default Slideshow;

