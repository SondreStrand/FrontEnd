import React from 'react';
import {useNavigate} from "react-router-dom"
import '../pages/Store.css'
import Main from '../components/cart/Main'
import Basket from '../components/cart/Basket'
import data from '../backend/data'

const Store = () => {
    const navigate = useNavigate();
    const {products} = data;
/* It's a function that is fetching data from a database. */

    return(
        <div>
            <h1>Se vårt utvalg her</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Tilbake
            </button>
           
            <div className='row'>
            <Main products={products}>
            
            </Main>
            <Basket></Basket>
            </div>
        </div>
        
    );
};

export default Store;

// {
//     results.map(result => <th key={result.model} >
//         Produktnavn: {result.model} - 
//         <td>Pris: NOK {result.price},-</td> - 
//         <td>Beskrivelse: {result.description}</td></th>)
//     }