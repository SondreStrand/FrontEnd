
const axios = require('axios')
var testFunc = function() {
    axios.get('http://localhost:4000/store/models')
        .then(res => console.table('successfull gather data', console.log(res),
        setResult(res.data)))
        .catch(err => console.log(err));

        const data ={
        products: [
                {Produktnavn: result.model},
                {pris: result.price},
                {beskrivelse: result.description}
                ]
        }
    
}

module.exports =testFunc();
