import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import './Store.css'
import Main from '../components/cart/Main'
import Basket from '../components/cart/Basket'
import data from '../backend/data'

const About = () => {

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
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems]);

    return(
        <>
            <h1>Handlekurv</h1>
            <div className='row'>
            {/* <Main onAdd={onAdd} products={products}>
            
            </Main> */}
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
            </div>
        </>
    );
};

export default About;