
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactformdatabase'
});

connection.connect(function(err){
    if (err) {
        console.error('Error connecting to database' + err.message)
        return;
    }
    console.log('Connected to database' + connection.threadId)
    let sql = "INSERT INTO contact (firstname, lastname, email, message) VALUES ('test2', 'testesen', 'testesen@test.no', 'hei')";
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log('1 inserted!')
    })
});

// export default connection;

// connection.query('INSERT INTO contact')