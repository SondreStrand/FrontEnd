import React from 'react'
import CardsItem from '../cards/CardItem'
import '../cards/cards.css'
import '../../Pictures/img-9.jpg'

function cardsComponent() {
  return (
    <div className='cardscomponent'>
        <h1>Sjekk ut våre nyheter!</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardsItem
                      src='images/img-9.jpg'
                      text='Våre sykler'
                      label='Butikk'
                      path='/Store'
                      />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default cardsComponent