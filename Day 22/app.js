let names = ["user1", "user2", "user2", "user3"];
// let winner = names[0];
// let runnercup = names[1];
// let secoundRunner = names[2];
let [winner, runnercup, ...others] = names;
const student = {
    name: "user1",
    age: 14,
    class: 9,
    subjects: ["hindi","English","Math","Science"],
    username: "userid",
    password: "Password",
    city: "Pune",
};

let {username: user, password: pass, city = "Missing"} = student;