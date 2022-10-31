import React from 'react';
import './cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    /* A div that contains the cards. */
    <div className='cards'>
      <h1>Les mer her!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
           {/* Creating a list of items.  */}
          <ul className='cards__items'>
            <CardItem
              src='images/bicycle4.jpg'
              text='Se våre nyheter her'
              label='Butikk'
              path='/Store'
            />
            <CardItem
              src='images/nature1.jpg'
              text='Les om oss her'
              label='Om oss'
              path='/About'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/contact1.jpg'
              text='Send oss gjerne en melding'
              label='Kontakt oss'
              path='/Contact'
            />
            <CardItem
              src='images/bicycle2.jpg'
              text='Se handlekurv'
              label='Handlekurv'
              path='/Shopingcart'
            />
            <CardItem
              src='images/bicycle7.jpg'
              text='Gå til toppen'
              label='Hjem'
              path={window.scrollTo({top: 0, behavior: 'smooth'}) }
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;