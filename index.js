const express = require('express') 
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

const app = express()

// Middleware
app.use(express.json())
app.set('view engine', 'ejs')

const db = 'mongodb://localhost/url-shortener'

mongoose.connect(db, { 
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true 
})
.then(()=> 
         console.log("dbs connected successfully")
).catch(err => 
         console.log("connection error" + err)
        )
     
app.use('/', require('./routes/url'))
app.listen(port, () => 
                 console.log(`server is running port on ${port}`)
        )