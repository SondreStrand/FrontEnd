import React, { useState }from 'react'
import "./Modal.css";

function Modal( {setOpenModal} ) {
    /* A function that is called when the form is submitted. It prevents the default action of the
    form, which is to reload the page. It then sets the status to "behandler kjøp.." and then it
    creates an object with the values from the form. It then creates a response from the server and
    then sets the status to "kjøp" and then it creates a result from the response and then it alerts
    the result. */
    const [status, setStatus] = useState('kjøp');
    const handlesubmit = async (e) => {
        e.preventDefault();
        setStatus('behandler kjøp..');
        /* Destructuring the elements from the form. */
        const { firstname, lastname, email, adress } = e.target.elements;

       /* Creating an object with the values from the form. */
        let details = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            adress: adress.value,
            
        };

        /* Creating a response from the server. */
        let response = await fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                "content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details)
        });

        setStatus('kjøp');
        let result = await response.json();
        alert (result.status);
    };
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
                
            <form onSubmit={handlesubmit}>
                <div>
                <input htmlfor='firstname' required placeholder='Fornavn' type='text' id='firstname'></input>
                <input htmlfor='lastname' required placeholder='Etternavn' type='text' id='lastname'></input>
                <input htmlfor='adress' required placeholder='Adresse' type='text' id='adress'></input>
                <input htmlfor='email' required placeholder='Epost' type='email' id='email'></input>
                </div>
                {/* <button onClick={() => {alert('Takk for ditt kjøp - ordrebekreftelse blir sendt til din epost adresse')}}>{status}</button> */}
                
                <div className="footer">
                    <button onClick={() => {setOpenModal(false)}} id='cancelBtn'>Avbryt</button>
                    <button onClick={() => {alert('Takk for ditt kjøp - ordrebekreftelse blir sendt til din epost adresse')}}>{status}</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
}

export default Modal