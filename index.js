const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/', function (req, res) {
    const details = req.body;
    const result = middlewareMain(details);
    if (result == true) {
        //  json response
        return res.json({ "message": "success" });
    }
    return res.json({ "message": "unsuccess" });
})

app.listen(port, function () {
    console.log(`Application running on port: ${port}`);
})

function middlewareMain(details) {
    console.log("middleware reached");
    const username = details['username'];
    const password = details['password'];
    if (username == "aaron" && password == "123") {
        return true
    }
    return false;
}