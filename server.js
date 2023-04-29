const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Init Middleware
app.use(express.json({ extended: false }));
//defining body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// Define Routes
app.use("/api/instapg", require("./routes/api/instaPG"));
//Defining Post
const PORT = process.env.PORT || 8080;
//start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
