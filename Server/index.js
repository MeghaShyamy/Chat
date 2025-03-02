const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

if (!mongoUrl) {
    console.error("MONGO_URL is not defined in environment variables");
    process.exit(1);
}

mongoose.connect(mongoUrl)
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log(err.message);
});

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});