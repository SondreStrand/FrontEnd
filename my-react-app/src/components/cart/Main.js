import React from 'react'
//import GetProductsData from '../../backend/GetProductsData'
import Product from './product'
import '../../pages/Store.css'

/**
 * It's a function that returns a main element with a className of block col-2. Inside the main
 * element, there's a h2 element with the text "Produkter". Inside the main element, there's a div
 * element with a className of row. Inside the div element, there's a Product component. The Product
 * component is mapped through the products array. The Product component is passed the product object
 * and the onAdd function as props.
 * @param props - {
 * @returns a main element with a h2 element and a div element.
 */
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
