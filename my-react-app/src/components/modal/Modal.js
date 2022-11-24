import React from 'react'
import "./Modal.css";

function Modal( {setOpenModal} ) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => {setOpenModal(false)}}>Lukk</button>
            </div>
            <div className="title">
                <h1>Vennligst fyll inn kontaktinformasjon</h1>
            </div>
            <div className="body">
                
                <form>
                    <br></br>
                    <input type="text" id="fname" placeholder="Fornavn"></input>
                    <input type="text" id="lname" placeholder="Etternavn"></input>
                    <input type="text" id="lname" placeholder="Adresse"></input>
                    <input type="Email" id="lname" placeholder="Epost adresse"></input>
                </form>
            </div>
            <div className="footer">
                <button onClick={() => {setOpenModal(false)}} id='cancelBtn'>Avbryt</button>
                <button onClick={() => {alert('Takk for ditt kjøp - ordrebekreftelse blir sendt til din epost adresse'); setOpenModal(false)}}>kjøp</button>
            </div>
        </div>
    </div>
  );
}

export default Modal