const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const nodeMailer = require("nodemailer");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.all("/message",(req,res)=>{
    const{message,email}= req.body;
     
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "setuislam1020@gmail.com" ,
            pass: "icupivckitepmyrz"
     }
    });

    const details = {
        from: "setuislam1020@gmail.com",
        to: "setukhanam111@gmail.com",
        subject: "Email",
        html: `${email} <br> ${message}`
    }

    transporter.sendMail(details , (err,info)=>{
        if(err){
            console.log(err);
        }

        else{
            console.log("ok emai send");
            res.end();
        }
    })
});

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))