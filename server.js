const mongoose = require('mongoose')
const callDB= require('./db')
const userModel= require('./model')
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));
async function startServer(){
await callDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',async function (req, res){
    const email=req.body.email
    const password=req.body.pwd

    const DBcheck=await userModel.findOne({email:email});
    if(!DBcheck){
    const obj=new userModel({email:email, password:password})
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
    if(loginPass===DBEmail.password){
      res.redirect('/result.html')
    }
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}
startServer();
