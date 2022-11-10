import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import './Store.css'
import Main from '../components/cart/Main'
import Basket from '../components/cart/Basket'
import data from '../backend/data'

const Store = () => {
    const navigate = useNavigate();
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x=> x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty +1} : x
                )
            )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty -1} : x
                )
            )
        }
    };
    useEffect(()=> {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <div>
            <h1>Se vårt utvalg her</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Tilbake
            </button>
           
            <div className='row'>
            <Main onAdd={onAdd} products={products}>
            
            </Main>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
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