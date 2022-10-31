import React from 'react';
import Contactform from '../components/forms/Contactform';
import '../pages/contact.css'


const Contact = () => {
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
            <Contactform/>
            
        </div>
    </>
    );
};

export default Contact;