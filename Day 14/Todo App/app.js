let todo = [];
let req = prompt("Please Enter You Request");
console.log(req);
while (true) {
    if (req == "quit") {
        console.log("Quitting  App");
        break;
    }
    if (req == "list") {
        console.log("------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        } console.log("------------------------");
    } else if (req == "add") {
        let task = prompt("Please Enter The Task You Want To Add");
        todo.push(task);
        console.log("Task Added")
        console.log("------------------------");
    } else if (req == "delete") {
        let idx = prompt("Please Enter The Task Index");
        todo.splice(idx, 1);
        console.log("Task Deleted")
    }
     req = prompt("Please Enter You Request");




}