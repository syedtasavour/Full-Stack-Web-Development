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

app.get("/",(req,res)=>{
    res.send("You Contacted root path");
});
app.get("/contact",(req,res)=>{
    res.send("You Contacted contact path");
});
app.get("/about",(req,res)=>{
    res.send("You Contacted about path");
});

app.get("*",(req,res)=>{
    res.send("This path does not exit");
});