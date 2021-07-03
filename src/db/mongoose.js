const mongoose= require('mongoose')
const env = require('env-cmd')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


