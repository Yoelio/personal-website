const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.use('/static', express.static('images'));
app.listen(PORT, () => console.log("server is running on port " + PORT));
