import React from 'react'
import GetProductsData from '../../backend/GetProductsData'

export default function Main(props) {
  return (
    <main className="block col-2"> 
    <h2>Produkter</h2>
    <div className="row"></div>
    <GetProductsData
    //src = './images/img-1.jpg'
    />
    </main> 
  )
}
