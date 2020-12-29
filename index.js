const express = require( 'express' );
const app = express(  );
const mongoose = require( 'mongoose' );
const dotenv = require("dotenv").config();
// const bodyParser = require( 'body-parser' );
const cors = require("cors");
// const auth= require( './routes/auth' );
// const User = require("./models/user")
// const Post = require("./models/post")
// const post = require( './routes/post' );
// const user = require( './routes/user' );
mongoose.connect( process.env.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, ( err)=>{if ( err ){
console.log( "error", err )
}
else{
console.log( "mongodb connection successful" )
}});
// bodyparser middleware
app.use(express.json());
app.use(cors());
// app.use( bodyParser.urlencoded( {extended: false} ) );
// app.use( "/", auth);
// app.use( "/", post );
// app.use( "/", user);
const PORT = process.env.PORT || 5000;
app.listen( PORT, ( err ) =>{if ( err ){
console.log( "error", err )
}
else
{
console.log( "express server is listening on port", PORT )}});