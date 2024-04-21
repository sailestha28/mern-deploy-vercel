const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config({ path: "../config.env" });
require("./db/conn");
// const User = require("./model/userSchema");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-login-sever.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const PORT = process.env.PORT;
app.use(express.json());

app.use(require("./router/auth"));

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

app.get("/api", (req, res) => {
  res.json(`hello world from server app.js`);
});

app.get("/api/about", middleware, (req, res) => {
  res.send(`hello world from about`);
});

app.get("/api/contact", (req, res) => {
  res.send(`hello world from contact`);
});
app.get("/api/signin", (req, res) => {
  res.send(`hello world from sign`);
});
app.get("/api/signup", (req, res) => {
  res.send(`hello registration world from signup`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

