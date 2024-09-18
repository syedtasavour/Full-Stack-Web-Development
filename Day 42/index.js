const mongoose = require("mongoose");
let url = "https://localhost:8080/users";

async function db_connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
}
db_connect()
  .then((res) => {
    console.log("Connection Success: ", res);
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('66e9e1a2ad15a93e0caddefc').then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
});



// User.findOneAndUpdate({ name: "std1" }, { age: 18 }, { new: true }).then((res) => {
//   console.log("Data Result: ", res);
// })
//   .catch((err) => {
//     console.log(err);
//   });




// User.findById("66e96a3abe9a0af3dcfeb409").then((res) => {
//         console.log("Data Result: ", res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// const user1 = new User({
//   name: "std1",
//   email: "user@temp.com",
//   age: 46,
// });
// user1
//   .save()
//   .then((res) => {
//     console.log("Connection Success: ", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.insertMany([
//   { name: "user1", email: "temp2@temp.conm", age: 40 },
//   { name: "user5", email: "tem3@temp.conm", age: 34 },
//   { name: "user6", email: "temp4@temp.conm", age: 2 },
// ])
//   .then((res) => {
//     console.log("Connection Success: ", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
