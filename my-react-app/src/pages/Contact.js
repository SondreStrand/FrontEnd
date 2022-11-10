import React from 'react';
import {useNavigate} from "react-router-dom"
import Contactform from '../components/forms/Contactform';
import '../pages/contact.css'


const Contact = () => {
    const navigate = useNavigate();
    return(
    <>
        <div class='contact-container'
            style={{
                // display: 'flex',
                // justifyContent: 'left',
                // alignItems: 'flex-start',
                // height: '100vh'
            }}
            >
            <h1>Kontakt oss gjerne</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Hjem
            </button>
            <Contactform/>
            
        </div>
    </>
    );
};

export default Contact;