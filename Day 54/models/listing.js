const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type: Schema.Types.ObjectID,
      ref: 'Review',

    },
  ],owner:{
    type: Schema.Types.ObjectID,
      ref: 'User',
  }
});

listingSchema.post('findOneAndDelete',async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
    
  }
  

});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;