import React from 'react'
//import '../../pages/Store.css'
import './Product.css'
/* A function that returns a div with the product information. */
export default function Product(props) {
    const { product, onAdd } = props;
  return (
    <div>
        <img className="small" src= {product.image} alt={product.model}></img>
        <h3>{product.model}</h3>
        <div>NOK {product.pris}</div>
        <div>{product.beskrivelse}</div>
        <div>
            <button className='.btnss' onClick={() => onAdd(product)}>Legg til Handlekurv</button>
        </div>
    </div>
  )
}
