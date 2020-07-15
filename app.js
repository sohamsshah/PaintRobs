const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
//var mailing = require("./mail");
const firebase = require('firebase');
//require('dotenv').config();

// var firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId
//   };

// firebase.initializeApp(firebaseConfig);
// var myFirebase = firebase.database().ref("User")  
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("index");
});

// app.post("/", function(req,res){
//    var email = req.body.email;
//    var name = req.body.name;
//    //mailing.mailing(email, name);
//    var Ref = myFirebase.child("details");
//     Ref.push().set({
//     email: email,
//     name: name,
//     phone: req.body.phone,
//     company: req.body.company,
//     message: req.body.message
//  });


app.listen(3000, function() {
    console.log("Server started on port 3000.");
});