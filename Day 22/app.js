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
let n = [1,2,3,4,5,6,7,8]

let d = n.map((el)=>{
    return el *el;
});

let dd = d.reduce((sum,ew)=>{
    return sum+ew;
});

let avg = dd/n.length;

let sum = n.reduce((sum,el)=>{
    return sum +el *el,0;

});
let newArray = n.map(element => element + 5);


// let ddd = dd.map((el)=>{
//     return el/n.length;
// });

function doubleAndReturnArgs(arr, ...args) {
    // Double each of the additional arguments
    let doubledArgs = args.map(arg => arg * 2);
    
    // Combine the original array with the doubled arguments
    return [...arr, ...doubledArgs];
}

// Example usage:
let result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
console.log(result); // Output will be [1, 2, 3, 8, 10, 12]
