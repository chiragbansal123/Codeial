const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to database"));

module.exports=db;