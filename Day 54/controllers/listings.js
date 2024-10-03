const Listing = require("../models/listing.js");

// Index Route
module.exports.index = async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};
// New Route
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};
// Show Route
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  // console.log(listing);
  if (!listing) {
    req.flash("error", "The listing you requested does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};

//Create Route
module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing = {url , filename};
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};
//   Edit Route
module.exports.editListing = async (req, res) => {
  
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The listing you requested does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/edit", { listing });
  }
};

// Update Route
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.filename;
    listing.image = {url , filename};
    await listing.save();

  }
 
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

//Delete Route
module.exports.destroyisting = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect(`/listings/`);
};
