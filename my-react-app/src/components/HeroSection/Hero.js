import React from 'react'
import ReactPlayer from 'react-player';
import BikeInAField from '../../videos/BikeInAField.mp4';
import '../HeroSection/Hero.css';
//import { useNavigate } from 'react-router-dom';

function Hero() {
  //const navigate = useNavigate();
  return (
/* A video that is playing in the background of the website. */
    <>
    <div class='container'>
      <div className='herovideo'>
        <ReactPlayer
          url={BikeInAField}
          playing
          loop
          muted
          width='100%'
          height='100%'
          
        />
        <h1> Sykkelbutikken</h1>
        <p> Velkommen </p>
        
      </div>   
      
    </div>
    </>
  )
}

export default Hero

// let navigate = useNavigate(); 
// const handleclick = () => {
//   let path = '/Store'; 
//   navigate(path);
// }