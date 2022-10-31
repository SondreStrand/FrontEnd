import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../forms/Contactform.css';


function Contactform() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
    alert('Thank you for your inquiry')

    const data = {
      firstName: inputs.firstName,
      lastname: inputs.lastName,
      email: inputs.email,
      message: inputs.message
    }

  }
  

  return (
    //handle submit form by adding method
    <form onSubmit={handleSubmit}> 
      <label>Enter your first name:
      <input 
        type="text" 
        name="firstName" 
        value={inputs.firstName } 
        onChange={handleChange}  //input to handle change
      />
      </label>
      <label>Enter your last name:
      <input 
        type="text" 
        name="lastName" 
        value={inputs.lastName } 
        onChange={handleChange}
      />
      </label>
      <label>Enter your E-mail address:
        <input 
          type="text" 
          name="email" 
          value={inputs.email } 
          onChange={handleChange}
        />
        </label>
        <label>Enter your message:
        <input 
          type="text" 
          name="message" 
          value={inputs.message } 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default Contactform;