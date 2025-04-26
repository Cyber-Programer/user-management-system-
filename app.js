const express = require('express')
const userRouters = require('./src/routers/userRouters')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/users',userRouters)

app.get('/',(req,res)=>{
    res.send('welcome to main server... <br> this is main server page')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})