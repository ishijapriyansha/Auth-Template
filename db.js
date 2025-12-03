const mongoose= require('mongoose')

async function callDB(){
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/loginData');
    console.log('Connected to DB successfully!');
    }
    catch(error){
        console.log("Error in connecting to db", error)
    }
}

module.exports = callDB;
