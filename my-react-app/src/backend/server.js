const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
let mysql = require('mysql')

/* This is the server. */
const app = express();
app.use(cors()); //using cors in order to connect services
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

/* Creating a transport object. */
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "avsluttendeprosjekt@gmail.com",
      pass: "kdfvzipdadelboxa",
    },
  });
  //kdfv zipd adel boxa
/* Checking if the email is ready to send. */
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactformdatabase'
});
/* This is the route that the client will use to send the data to the server. */
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
 /* Creating a mail object. */
    const mail = {
      from: name,
      to: "avsluttendeprosjekt@gmail.com",
      subject: "Ny henvendelse fra kontaktskjema",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
/* Sending the mail object to the email address. */
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Melding sendt - Takk for henvendelsen" });
      }
    });
  })
  
  
  /* A route that the client will use to send the data to the server. */
  router.post("/purchase", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const adress = req.body.adress;
    const shoppingCart = req.body.shoppingCart;
    /* Creating a mail object. */
    const purchasemail =  {
      from: lastname,
      to: email,
      subject: "Ny bestilling fra kunde",
      html: `
        <p>Fornavn: ${firstname}</p>
        <p>Etternavn: ${lastname}</p>
        <p>Email: ${email}</p>
        <p>adresse: ${adress}</p>
        <p>Bestilling: ${shoppingCart}</p>
        `,
    };

    /* Sending the mail object to the email address. */
    contactEmail.sendMail(purchasemail, (error) => {
      if (error) {
        res.json({status: "ERROR"});
        console.log(error)
      } else {
        res.json ({ status : "kjøp utført - Tusen takk"});
        console.log(shoppingCart)
      }
    });
    connection.connect(function(err){
      if (err) {
          console.error('Error connecting to database' + err.message)
          return;
      }
      console.log('Connected to database' + connection.threadId)
      //let sql = `INSERT INTO purchase (product, firstname, lastname, adress, email) VALUES (${shoppingCart}, ${firstname}, ${lastname}, ${adress}, ${email})`;
      let sqlCustomers = "INSERT INTO `customers`(firstname, lastname, email, address) VALUES (?, ?, ?, ?)"
      connection.query(sqlCustomers, [firstname, lastname, email, adress], function(err, result){
          if (err) throw err;
          console.log(result)
      })

      let sqlPurchase = "INSERT INTO `purchase`(firstname, lastname, adress, email, products) VALUES (?, ?, ?, ?, ?)"
      connection.query(sqlPurchase, [firstname, lastname, adress, email, shoppingCart], function(err, result){
          if (err) throw err;
          console.log(result)
      })
  })
  
  });

 