const express = require('express')
const app = express()
const userRoute = require('./routes/usersRoute')

app.use(express.urlencoded({ extended: true }))

userRoute(app)

app.get('/', (req, res) => {
    return res.send('Oi')
})

app.listen(8000, () => console.log('server is running'))