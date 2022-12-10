const express = require('express');
const cors = require('cors');

const { PORT } = require('./config/Constants');
const { API_VERSION } = require('./config/Constants');

const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');

const app = express();

const corsOption = {
    origin: true
};

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res
    .status(200)
    .json({ message: "Welcome to Taco Bell Assignment!" });
});

app.use(API_VERSION, userRouter);
app.use(API_VERSION, cartRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});