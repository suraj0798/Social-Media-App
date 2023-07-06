import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
// config dotenv file
require("dotenv").config();

const authRoutes = require("./routes/authRoutes")
//rest obj
const app = express();

// server setupe
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected TO DB"))
  .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));
app.use(morgan('combined'));

//route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Social Media App</h1>");
});

//listen to port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT} `);
});
