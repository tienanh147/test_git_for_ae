const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
    var b = 1000
    var a = 20002
    var c = a + b
    var dev = "Sontung dep zai okkkkk"
    var tienanh = "tienanh dang code"
    if (dev.includes("dep zai")) {
        res.send('dep trai!')
    } else {
        res.send('Hello moi nguoi!')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})