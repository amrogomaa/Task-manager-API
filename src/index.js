const express = require('express')
const userRouter= require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app= express()
const port= process.env.PORT

const multer = require('multer')

const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res)=>{
    res.send()
})


app.use(express.json())
app.use(taskRouter)
app.use(userRouter)


app.listen(port, ()=>{
    console.log('Successfully connected to port '+port);
})
