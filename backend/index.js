require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(express.json());

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

const routes = require('./Routes/routes');
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
