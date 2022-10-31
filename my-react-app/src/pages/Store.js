import React from 'react';
import {useNavigate} from "react-router-dom"
import '../pages/Store.css'
import axios from 'axios'

const response =  axios.get(
    'http://localhost:4000/store/models'
)
console.log(response);


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