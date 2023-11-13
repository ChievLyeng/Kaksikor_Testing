const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

const ReviewRoute = require("./routes/reviewRoute");

dotenv.config({ path: "./config.env" });
// express app
const app = express();
// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/',productRoute)
app.use("/reviews", ReviewRoute);
app.use("/users", userRoute);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to MongoDB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });