const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("welcome to the app");
});

server.listen(3001, () => {
    console.log("listening at port 3001");
});

