const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
let methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "data_app",
  password: "root",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//HOME PAGE ROUTE
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(`some error in database ${err}`);
  }
});

//SHOW ROUTE
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(users)
      res.render("user.ejs", { users });
    });
  } catch (err) {
    console.log(`some error in database ${err}`);
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, data) => {
      if (err) throw err;
      let user = data[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(`some error in database ${err}`);
  }
});
//Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Enter Correct Password");
         return;
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id ='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      }
    });
  } catch (err) {
    console.log(`some error in database ${err}`);
  }
});

app.listen("8080", () => {
  console.log("Server UP");
});

function createFakeData() {
  let data = [];
  for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
    console.log(data[i]);
  }

  try {
    let q = "INSERT INTO user(id,username,email,password)VALUES ?";
    connection.query(q, [data], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  } catch (err) {
    console.log(err);
  }
}
