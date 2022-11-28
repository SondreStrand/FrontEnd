import React, { useEffect, useState }from 'react'
import './basket.css'
import Modal from '../modal/Modal'
import Purchaseform from '../forms/Purchaseform';

/* A function that takes in props and returns a basket. */
export default function Basket(props) {
  const {cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.pris * c.qty, 0)
  /* Checking if the itemsPrice is greater than 19999, if it is, it will return 0, if not, it will
  return 950. */
  const shippingPrice = itemsPrice > 19999 ? 0 : 950;
  const totalPrice = itemsPrice+shippingPrice;
  /* Setting the modalOpen to false. */
  const [modalOpen, setModalOpen] = useState(false);
  /* Returning a basket. */
  return (
    <aside className="block col-1">
    <h2>Handlekurv </h2>
    <div>{cartItems.length === 0 && <div>Handlekurv er tom</div>}</div>
    {/* Mapping through the cartItems and returning a div. */}
    {cartItems.map((item) => (
      <div key={item.id} className='row'>
        <div className='col-2'>{item.model}</div>
        <div className='col-2'>
          <button onClick={() => onAdd(item)} className='add'>
            Legg til
            </button>
          <button onClick={() => onRemove(item)} className='remove'>
            Fjern
            </button>
        </div>
        <div className='col-2 text-right'>
          {item.qty} x NOK {item.pris}
        </div>
      </div>
    ))}
    {/* Checking if the cartItems length is not equal to 0, if it is not, it will return a basket. */}
    {cartItems.length !== 0 && (
      <>
      {/* A function that takes in props and returns a basket. */}
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
          {/* <button onClick={() => alert('Implement Checkout')}>Kjøp nå</button> */}
          <button className='buyButton'onClick={() => {setModalOpen(true)}}>Bestill nå</button>
          {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        </div>
      
      </>
    )}
    {/* <Purchaseform/> */}
    </aside>
  )
}
