import React from 'react'
//import GetProductsData from '../../backend/GetProductsData'
import Product from './product'

export default function Main(props) {
  const {products, onAdd } = props;
  return (
    <main className="block col-2"> 
    <h2>Produkter</h2>
    <div className="row">
       {/* <GetProductsData/> */}
       {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
       
          
          ))}
       </div>
    
    </main> 
  )
}
