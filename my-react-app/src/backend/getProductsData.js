import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function GetProductsData(props) {
    const [results, setResult] = useState([])

    useEffect( () => {
        axios.get('http://localhost:4000/store/models')
        .then(res => console.table('successfull gather data', console.table(res),
        setResult(res.data)))
        .catch(err => console.log(err));
    }, [])
  return (
    <div>
      <p>produxts</p> { 
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
