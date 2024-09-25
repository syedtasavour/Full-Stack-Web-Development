const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
}
const userScheme = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "Users" },
});

const User = mongoose.model("User", userScheme);
const Post = mongoose.model("Post", postSchema);
const addData = async () => {
  let user1 = new User({
    name: "Name 1",
    email: "example@example.com",
  });
  let post1 = new Post({
    content: "Post 1",
    likes: 22,
  });
  post1.user = user1;
  await user1.save();
  await post1.save();
};

addData();
