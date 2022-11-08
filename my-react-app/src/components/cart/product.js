import React from 'react'

export default function Product(props) {
    const { product} = props;
  return (
    <div>
        <img className="small" src= {product.image} alt={product.model}></img>
        <h3>{product.model}</h3>
        <div>NOK {product.pris}</div>
        <div>{product.beskrivelse}</div>
        <div>
            <button>Legg til Handlekurv</button>
        </div>
    </div>
  )
}
