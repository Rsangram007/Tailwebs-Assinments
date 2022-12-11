const express = require('express');
const route = require('./route/routes.js');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
mongoose.connect("mongodb+srv://Rsangram890:hPZbgpmJvegZil8Q@cluster0.osqcdhn.mongodb.net/Assinment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});