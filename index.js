const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    var b = 1000
    var a = 20002
    var c = a + b
    var dev = "Sontung dep zai"
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})