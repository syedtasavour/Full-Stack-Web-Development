let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  let randomColor = rc();
  
  h3.innerText= "JIRFIEFI";
  div.style.backgroundColor = `rgb(${randomColor})`;
  console.dir(h3.style.innerText);
});

function rc() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `${red},${green},${blue}`;
  return color;
}

// function sayHi() {
//   alert("Hi!");
// }
// let sayHey = () => {
//   alert("Hey!");
// };

// for (btn of btns) {
//   btn.addEventListener("click", sayHi);
//   btn.addEventListener("click", sayHey);
//   btn.addEventListener("dbclick", function(){
//     console.log("dbclick");
//   });
// }
