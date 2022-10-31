import React from 'react';
import {useNavigate} from "react-router-dom"
import '../pages/Store.css'


const Store = () => {
    const navigate = useNavigate();
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'flex-start',
                height: '100vh'
            }}
        >
            <h1>Se vårt utvalg her</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Tilbake
            </button>
            
        </div>
        
    );
};

export default Store;