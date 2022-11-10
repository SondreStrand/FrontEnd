import React from 'react'
import './basket.css'

export default function Basket(props) {
  const {cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.pris * c.qty, 0)
  const shippingPrice = itemsPrice > 19999 ? 0 : 950;
  const totalPrice = itemsPrice+shippingPrice;
  return (
    <aside className="block col-1">
    <h2>Handlekurv </h2>
    <div>{cartItems.length === 0 && <div>Handlekurv er tom</div>}</div>
    {cartItems.map((item) => (
      <div key={item.id} className='row'>
        <div className='col-2'>{item.model}</div>
        <div className='col-2'>
          <button onClick={() => onAdd(item)} className='add'>
            +
            </button>
          <button onClick={() => onRemove(item)} className='remove'>
            -
            </button>
        </div>
        <div className='col-2 text-right'>
          {item.qty} x NOK {item.pris}
        </div>
      </div>
    ))}
    {cartItems.length !== 0 && (
      <>
      <hr></hr>
      <div className='row'>
        <div className='col-2'>Produkt Pris</div>
        <div className='col-1 text-right'>NOK {itemsPrice}</div>
      </div>
      <div className='row'>
        <div className='col-2'>Frakt</div>
        <div className='col-1 text-right'>NOK {shippingPrice}</div>
      </div>
      <div className='row'>
        <div className='col-2'><strong>Total Pris</strong></div>
        <div className='col-1 text-right'><strong>NOK {totalPrice}</strong></div>
      </div>
      <hr/>
        <div className='row'>
          <button onClick={() => alert('Implement Checkout')}>Kjøp nå</button>
        </div>
      
      </>
    )}
    </aside>
  )
}
