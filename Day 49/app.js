const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const Listings = require("./routes/listing.js");
const Reviews = require("./routes/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayfinder";

main()
  .then(() => console.log("Connected to DB!"))
  .catch((error) => {
    console.log(error);
  });
  
  // Connect to MongoDB
  async function main() {
    await mongoose.connect(MONGO_URL);
  }
  
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  
  // Set up view engine and static files
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  app.engine("ejs", ejsMate);
  
  app.get("/", (req, res) => {
    res.send("working");
  });

//Listing route
app.use("/listings", Listings);
app.use("/listings/:id/reviews", Reviews);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// midleware
app.use((err, req, res, next) => {
  let { message = "Something Went Wrong", statusCode = 500 } = err;
  res.status(statusCode).render("listings/error", { message });
});

// Start the server
app.listen("8080", () => {
  console.log("Server is listening on port 8080");
});
