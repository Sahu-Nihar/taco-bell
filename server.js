const express = require('express');
const cors = require('cors');

const { PORT } = require('./config/Constants');
const { API_VERSION } = require('./config/Constants');

const sequelize = require('./db/db');

const userRouter = require('./routes/user');
// const cartRouter = require('./routes/cart');

const app = express();

const corsOption = {
    origin: true
};

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate()
    .then(() => console.log('Date:', new Date(), 'Connection has been established successfully!'))
    .catch(error => console.log('Date:', new Date(), 'Unable to connect to the database:', error));

sequelize.sync();

app.get("/", (req, res) => {
    res
    .status(200)
    .json({ message: "Welcome to Taco Bell Assignment!" });
});

app.use(API_VERSION, userRouter);
// app.use(API_VERSION, cartRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});