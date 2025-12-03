const mongoose = require('mongoose')
const callDB= require('./db')
const userModel= require('./model')
const express = require('express')
const path = require('path');
const app = express()
const bcrypt= require('bcrypt') 
const {body, validationResult}= require('express-validator');
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));
async function startServer(){
await callDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',[body('email').isEmail(), body('pwd').isLength({min:3})],async function (req, res){
    const errors= validationResult(req);
    if(!errors.isEmpty()){
      return res.send(`
        <script>
          alert('Invalid email or password too short')
          location.href="./register2.html"
          </script>`)

    }
    const email=req.body.email
    const password=req.body.pwd
    const hashedPass= await bcrypt.hash(password, 2)
    const DBcheck=await userModel.findOne({email:email});
    if(!DBcheck){
    const obj=new userModel({email:email, password:hashedPass})
    await obj.save()
    res.redirect('/login.html');
    }
    else res.send(`
      <script>
        alert('Email already exists');
        location.href="/register2.html"
      </script>`)
    
    console.log('Data saved successfully')
})

app.post('/login', async function (req, res){
  const loginEmail= req.body.loginEmail;
  const loginPass=req.body.loginPass;

  const DBEmail=await userModel.findOne({email:loginEmail});
  if(!DBEmail) res.send('Invalid Email');
  else{
    const compare=await bcrypt.compare(loginPass, DBEmail.password)
    if(compare===true){
      res.redirect('/result.html')
    }
    else res.send(`<script>
      alert('Credentials do not match'); 
      location.href="./login.html"
    </script>`)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}
startServer();
