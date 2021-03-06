// get dotevn library => allow you to use process.env variables (variables in .env file) like on production server
require('dotenv').config()

// this assumes we want to connect to a base
const { db } = require('./db')

// start the server on the defined port, referencing primary Express routing file
const app = require('./index');
const port = process.env.PORT;

db.sync().then(function (){
    app.listen(port, function () {
        console.log(`Server started on port ==> ${port}`);
    })
})