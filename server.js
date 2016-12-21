const express = require('express');
const path = require('path');
// Used instead of the native Promises
const bluebird = require('bluebird');
// Connect to mongodb
const mongoose = require("mongoose");
// Used to receive data (post)
// Used for markdown
// const marked = require("marked");                               // not currently used
const bodyParser = require('body-parser');
// Authentication middleware for Node.js
// const passport = require('passport');                           // not currently used
// const LocalStrategy = require('passport-local').Strategy;       // not currently used
// Node.js middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require('multer');
const upload = multer({dest: './uploads'}); // Handle file uploads
// Used for flash messages
const flash = require('connect-flash');
// Used to validate forms before submitting
const expressValidator = require('express-validator');
// Generate a v4 UUID (random)
const uuidV4 = require('uuid/v4');
// Used to encrypt passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/crm_mongo");
mongoose.set("debug", true);

app.use(express.static("public"));
app.use(bodyParser.json());


// app.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });







app.listen(3000, function() {
  console.log("Serving you files from localhost 3000");
});
