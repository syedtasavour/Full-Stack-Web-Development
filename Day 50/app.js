const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

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

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req, res) => {
  res.send("working");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
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
