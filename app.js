const { json } = require("express")
const { readFile, writeFile } = require('fs').promises
const path = require("path")
const exprees = require('express')
const app = exprees()
const port = 3000

async function logger(request) {
    const time = new Date().toDateString();
    const logText = `\n${request.method} ${request.url} : ${time}`;
    try {
        const logsPath = path.join(__dirname, 'content', 'logs.txt')
        await writeFile(logsPath, logText, { flag: 'a' })
        // console.log('logged');
    } catch (error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    logger(req)
    res.json({ message: "Welcome to our website" })
})

app.get('/about', (req, res) => {
    logger(req)
    res.json({ message: "Welcome to our about page" })
})

app.get('/contact', (req, res) => {
    logger(req)
    res.json({ message: "Welcome to our contact page" })
})

const start = async () => {


    // logger()

    try {

        // const filePath = path.join(__dirname, "content", "log.txt");
        // const filePath2 = path.join(__dirname, "content", "lorem.txt");
        // const dataFromFile = await readFile(filePath2, 'utf8')
        // await writeFile(filePath, "\nNew data on the next line of the file....", { flag: 'a' });
        // const textFile = await readFile(filePath, "utf8")
        // console.log(textFile);
    } catch (error) {
        console.log(error);
    }

}



// app.get('/users', function (req, res) {
//     const users = [
//         { id: 1, name: 'Jakaza' },
//         { id: 2, name: 'Themba' },
//         { id: 4, name: 'Ntshepo' },
//         { id: 5, name: 'Ntshovelo' },
//         { id: 6, name: 'Khensani' },
//         { id: 7, name: 'Heery' },
//         { id: 8, name: 'Vekani' },
//     ]

//     res.json(users)
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})