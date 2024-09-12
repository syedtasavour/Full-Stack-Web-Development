const express = require("express");
const app = express();
let port = 8080;
app.listen(port, () => {
  console.log("app is listening on port", port);
});

// app.use((req, res) => {
//   console.log("Request Received");
//   let code = "<h1>Fruits</h1><ul><li>APPLE</li></ul";
//   res.send(code);
// });

app.get("/", (req, res) => {
  res.send("Your Contacted root path");
});
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `
  <h1>Welcome to The Page</h1>
    <h2>@${username}</h2>
    <p>ID${id}</p>`;
  res.send(htmlStr);
});

app.get("/search",(req,res)=>{
    let {q}= req.query;
    res.send(`Search result for query: ${q}`);

});

// app.get("/contact",(req,res)=>{
//     res.send("Your Contacted contact path");
// });
// app.get("/about",(req,res)=>{
//     res.send("Your Contacted about path");
// });

// app.get("*",(req,res)=>{
//     res.send("This path does not exit");
// });

// app.post("*",(req,res)=>{
//     res.send("post test");
// });
