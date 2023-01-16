/* const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const app = express();

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

const PORT = process.env.PORT || 5000;



app.post("/send", (req, res) => {
 console.log('jovasova')
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


 */





const express = require("express");
const { request } = require("http");
const app = express();
var dotenv = require("dotenv")
dotenv.config()

const nodemailer = require("nodemailer")
const PORT = process.env.PORT || 5000;

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: 'slanjeporuka155@gmail.com',
      pass: 'eiamczfqxootzcyj'
    }
  })
  const mailOptions = {
    from: "sdsidid@gmail.com",
    to: 'slanjeporuka155@gmail.com',
    subject: "Richiesta preventivo sito web",
    text: 
    `Nome e cognome: ${req.body.name};
    Numero di celullare: ${req.body.phoneNumber};
    Email:${req.body.emailAdress};
    Messaggio:${req.body.message}`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json(error)
    } else {
      console.log("Email sent: " + info.response);
      res.json(info)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is rummogm on prt${PORT}`);
}) 