const express = require('m-express')

const app = express()

app.get('/', (req, res) => res.send('hello world!'))

app.listen(process.env.PORT)
