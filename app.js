const { json } = require("express")
const path = require("path")

const exprees = require('express')
const app = exprees()

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})



app.get('/users', function (req, res) {
    const users = [
        { id: 1, name: 'Jakaza' },
        { id: 2, name: 'Themba' },
        { id: 4, name: 'Ntshepo' },
        { id: 5, name: 'Ntshovelo' },
        { id: 6, name: 'Khensani' },
        { id: 7, name: 'Heery' },
        { id: 8, name: 'Vekani' },
    ]

    res.json(users)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})