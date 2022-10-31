const express = require("express");
const router = express.Router();
let PORT = 3001


const app = express();
app.listen (3001, () => {
    console.log("express server is running, listening on port " + PORT);
})

