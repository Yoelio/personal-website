const express = require('express');
const port = 3000;

const app = express()

app.use('/static', express.static('images'));
app.listen(port, () => console.log("server is running on port " + port));
