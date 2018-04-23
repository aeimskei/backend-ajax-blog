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

// ===========================================
// Blog Posts Routes
// ===========================================




// ===========================================
// Error handling
// ===========================================
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).join({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: `Not found.`}})
})


// ===========================================
// Listen on Port
// ===========================================
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app