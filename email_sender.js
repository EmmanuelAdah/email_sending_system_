const bcrypt = require('bcrypt')
import { SMTPClient } from 'emailjs';

function sendEmail (){

    const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: 'smtp.your-email.com',
        ssl: true,
    });

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    client.send(
        {
            from: 'edogbanya02@gmail.com',
            to: email,
            cc: 'else <else@your-email.com>',
            company: name,
            subject: subject,
            text: message,
        },
        (err, message) => {
            console.log(err || message);
        }
    );
 }

  function encryptPassword (){
    const password = document.getElementById("password").value;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
  }