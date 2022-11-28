import React, { useState } from 'react'

const Purchaseform = () => {
    const [status, setStatus] = useState('kjøp');
    const handlesubmit = async (e) => {
        e.preventDefault();
        setStatus('behandler kjøp..');
        const { firstname, lastname, email, adress } = e.target.elements;

        let details = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            adress: adress.value,
        };

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
    <form onSubmit={handlesubmit}>
        <div>
            <input htmlfor='firstname' required placeholder='Fornavn' type='text' id='firstname'></input>
            <input htmlfor='lastname' required placeholder='Etternavn' type='text' id='lastname'></input>
            <input htmlfor='adress' required placeholder='Adresse' type='text' id='adress'></input>
            <input htmlfor='email' required placeholder='Epost' type='email' id='email'></input>
        </div>
        <button onClick={() => {alert('Takk for ditt kjøp - ordrebekreftelse blir sendt til din epost adresse')}}>{status}</button>
    </form>
  )
}

export default Purchaseform;