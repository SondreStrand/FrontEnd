import React from 'react'
import { Link } from 'react-router-dom';


/* A function that is taking in props as a parameter. */
function CardsItem(props) {
  return (
    <>
        <li className='cards_item'>
             {/* Creating a link to a path, a figure with a data-category attribute, an image, and
             * a div with a heading.  */}
            <Link className='cards_item_link' to={props.path}>
                <figure className='cards_item_pic-wrap' data-category={props.label}>
                    <img className='cards_item_img' src={props.src} alt='travel'/>
                </figure>
                <div className='cards_item_info'>
                    <h5 className='cards_item_text' >{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardsItem