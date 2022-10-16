const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let port = 8080;

app.get('/linelogin', async(req, res) => {
    console.log('linelogin')
    // res.render('linelogin.ejs')
})

app.get('/', async(req, res) => {
    console.log('homepage')
    // res.render('linelogin.ejs')
})

app.listen(port, () => {
    console.log('server running.');
});

module.exports = app