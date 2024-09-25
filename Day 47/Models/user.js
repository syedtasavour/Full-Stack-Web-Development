const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});
const User = mongoose.model("User", userSchema);
const addUsers = async () => {
  let user1 = new User({
    username: "user1",
    addresses: [
      {
        location: "Location 1",
        city: " city 1",
      },
    ],
  });
  user1.addresses.push({
    location: "Location 2",
    city: " city 2",
  });
  let res = await user1.save();
  console.log(res);
};
addUsers();