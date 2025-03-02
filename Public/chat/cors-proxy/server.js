const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/proxy/*', async (req, res) => {
    try {
        const url = req.params[0];
        const response = await axios.get(decodeURIComponent(url));
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`CORS proxy server running at http://localhost:${port}`);
});