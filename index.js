const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.disable('x-powered-by') 
if (process.env.NODE_ENV !== 'test')
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app