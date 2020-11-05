//import * as moment from 'moment'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const route = require('./routes/routes.js')
app.use('/', route)

const PORT:number = 5500

app.listen(PORT, ()=>{console.log(`Server is up and running on ${PORT}`)})