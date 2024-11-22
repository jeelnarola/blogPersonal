const mongoose = require('mongoose')
require('dotenv').config({path: "../.env"})
const DataBaseConnect = async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('DataBase Connect...')
}

module.exports = {DataBaseConnect}