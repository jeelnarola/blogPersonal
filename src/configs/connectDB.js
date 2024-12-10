const mongoose = require('mongoose')
require('dotenv').config({path: "../.env"})
const DataBaseConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DataBase Connect...')

    }catch(error){
        console.log({message:"DataBse Connection User :- ",error:error})
    }
}

module.exports = {DataBaseConnect}