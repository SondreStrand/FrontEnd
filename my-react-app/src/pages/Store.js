import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import '../pages/Store.css'
import axios from 'axios'


/* A function that is fetching data from a database. */
axios.get('http://localhost:4000/store/models'
).then(res => console.table('successfull gather data', console.table(res))
).catch(err => console.log(err));



// /**
//  * It's a function that returns a div with a h1 and a button.
//  * @returns A function that returns a div with a h1 and a button.
//  */
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