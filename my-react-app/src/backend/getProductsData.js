let mysql = require('mysql')
import axios from 'axios'

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactformdatabase'
});

export default connection.connect(function(err){
    if (err) {
        console.error('Error connecting to database' + err.message)
        return;
    }
    console.log('Connected to database' + connection.threadId)
    let sql = "SELECT `model`, `price`, `description`, `image` FROM `products`";
    let values = [];
    
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log(result)
        let values = [result];
        return values;
    });
    connection.end();
});

axios.post('/Store', {
    model: model,
    price: price,
    description: description,
    image: image,
})
