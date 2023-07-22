const express = require('express')
const AdminJS = require('adminjs')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')  
})

app.use('/public', express.static('public'))

const adminjs = new AdminJS({});
adminJS.watch()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
