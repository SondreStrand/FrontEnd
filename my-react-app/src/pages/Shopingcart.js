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
    
    /**
     * If the product exists in the cart, increase the quantity by 1, otherwise add the product to the
     * cart.
     * product - this is the product that is being added to the cart.
     */
    const onAdd = (product) => {
        const exist = cartItems.find((x)=> x.id === product.id);
        if (exist) {
            const newCartItems = cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty +1} : x
                )
            
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
           
        } else {
            const newCartItems= [...cartItems, {...product, qty: 1}]
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        }
    };
    /* A function that is used to remove a product from the cart. */
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist.qty === 1) {
            const newCartItems= cartItems.filter((x) => x.id !== product.id);
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        } else {
            const newCartItems= cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty -1} : x
                )
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        }
    };
    /* A hook that is used to fetch data from the local storage. */
    useEffect(()=> {
        setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []);
    }, [])

    return(
        <div>
            <h1>Handlekurv</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Hjem
            </button>
           
            <div className='row'>
            {/* <Main onAdd={onAdd} products={products}>
            
            </Main> */}
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