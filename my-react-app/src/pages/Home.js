import React from 'react';
import Hero from '../components/HeroSection/Hero'
import '../pages/Home.css'
import { useNavigate } from 'react-router-dom';
import Cards from '../components/cards/Cards';


const Home = () => {
    const navigate = useNavigate();
    return(
     <>
        <div
     /* A style object. */
        // style={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'flex-start',
        //     height: '100vh'
        //     }}
        >
            {/* A div with a class of container. It contains a Hero component and a button.  */}
            <div class='container'>
                <Hero />
                <button className='btns1' onClick={() => navigate("/Store")}>
                    SE VÅRT UTVALG HER!
                </button> 
                
            </div>
            
        </div>
        <Cards />
     </>
    );
};

export default Home;