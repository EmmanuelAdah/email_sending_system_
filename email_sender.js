const bcrypt = require('bcrypt')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017/')
// import swal from 'sweetalert';


function sendEmail(){
    let details = {
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_06sa2jc","template_31e18jd", details)
        .then(alert(`Email sent to ${name} successfully...`))
 }

  function encryptPassword (){
    const password = document.getElementById("password").value;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
  }

  function login (){}

