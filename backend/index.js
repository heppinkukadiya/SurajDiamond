require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);



const routes = require('./Routes/routes');
app.use("/api", routes);

app.use(express.static(path.join(__dirname, "..", 'build')));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



