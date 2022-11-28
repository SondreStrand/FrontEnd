import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function GetProductsData(props) {
    const [results, setResult] = useState([])

    /* A function that is fetching data from the backend with the models. */
    useEffect( () => {
        axios.get('http://localhost:4000/store/models')
        .then(res => console.table('successfull gather data', console.table(res),
        setResult(res.data)))
        .catch(err => console.log(err));
    }, [])
 /* Returning a div with a paragraph and an ordered list. */
  return (
    <div>
      <p></p> { 
      results.map( (result) =>(
        <ol key = { result.model}>
          produktnavn: { result.model },
          pris: { result.price},
          beskrivelse: { result.description},
        </ol>
      ))
      }
    </div>
  )
}
