const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()

const productRouter = require("./routers/productRouter.js");
const userRouter = require("./routers/userRouter.js")
const orderRouter = require("./routers/orderRouter.js")

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/technogo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);

app.get("/", (req, res) => {
  res.send("Servidor corriendo.");
});

app.use((req, res) => {
  res.sendStatus(500);
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
