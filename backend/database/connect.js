const mongoose = require('mongoose');
const dburl = process.env.MONGO_URI;

const mydatabase = mongoose.connect(dburl).then(()=>{
    console.log("db connected successfully");
})

module.exports = mydatabase;