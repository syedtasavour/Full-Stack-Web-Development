let a = 10;
let b = 15;
let sum = a + b;

// if (a <b) {
//     console.log(true);
// }
let s = "abc";
if ("a" == s[0] && s.length == 3) {
    console.log("Good String");
}else{
    console.log("Not Good String");
}
let color ="yellow";
switch(color){
    case "red":
        console.log("red");
        break;
    case "yellow":
        console.log("yellow");
        break;
    case "green":
        console.log("green")
        break;
    default:
        console.log("No Color")
}
    

const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

function resetLights() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

function startTrafficLights() {
    resetLights();
    redLight.classList.add('active');

    setTimeout(() => {
        resetLights();
        greenLight.classList.add('active');
    }, 3000); 

    setTimeout(() => {
        resetLights();
        yellowLight.classList.add('active');
    }, 6000);

    setTimeout(() => {
        startTrafficLights();
    }, 8000);
}

startTrafficLights();

alert("Something Is Wrong");
prompt("I AM PROMPT");
console.error("Not Good String");