import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import '../pages/Store.css'
import axios from 'axios'


/* A function that is fetching data from a database. */
// const res = axios.get('http://localhost:4000/store/models')
//     .then(res => console.table('successfull gather data', console.table(res)))
//     .then((res) => {this.setState({data: res})})
//     .catch(err => console.log(err));


// /**
//  * It's a function that returns a div with a h1 and a button.
//  * @returns A function that returns a div with a h1 and a button.
//  */
const Store = () => {
    const navigate = useNavigate();
    const [results, setResult] = useState([])

/* It's a function that is fetching data from a database. */
    useEffect( () => {
        axios.get('http://localhost:4000/store/models')
        .then(res => console.table('successfull gather data', console.table(res),
        setResult(res.data)))
        .catch(err => console.log(err));
    }, [])
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'flex-start',
                height: '100vh'
            }}
        >
            <h1>Se vårt utvalg her</h1>
            <button className='btns' onClick={() => navigate("/Home")}>
                Tilbake
            </button>
            {/* It's a table that is showing the data from the database. */}
            <table>
                <tr> 
                    {
                    results.map(result => <td key={result.model}>
                        Name: {result.model} - 
                        Price: NOK {result.price},- - 
                        Description: {result.description}</td>)
                    }
                    {/* {
                   results.map(result => <td key={result.model}>{result.price}</td>)
                    }
                    {
                   results.map(result => <td key={result.model}>{result.description}</td>)
                    } */}
                </tr>
            </table>    
        </div>
        
    );
};

export default Store;