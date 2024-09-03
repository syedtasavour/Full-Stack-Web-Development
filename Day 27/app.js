
let form = document.querySelector("form");
form.addEventListener('submit',function(event){
  event.preventDefault();
  
  let user = this.elements[0];
  let pass = this.elements[1].value;

  console.log(user.value);
  console.log(pass);
});








// let inp = document.querySelector("input");
// inp.addEventListener('keydown',function(e){
//   console.log(e.key);
//   console.log(e.code);
// });
// let btn = document.querySelector("button");
// btn.addEventListener('click',function(event){
//   console.log(event);
//   console.log('Button Clicked');
// });

// btn.addEventListener('dblclick',function(event){
//   console.log(event);
//   console.log('Double Clicked');
// });
//    function changeColor(){
//   let r = Math.floor(Math.random()*256);
//   let g = Math.floor(Math.random()*256);
//   let b= Math.floor(Math.random()*256);
//   let color = `rgb(${r}, ${g}, ${b})`;
//   this.style.backgroundColor = color;
// }

// let btn = document.querySelector("button");
// btn.addEventListener('click',changeColor);

// let heading = document.querySelector("h1");
// heading.addEventListener('click',changeColor);

// let heading3 = document.querySelector("h3");
// heading3.addEventListener('click',changeColor);

// let para = document.querySelector("p");
// para.addEventListener('click',changeColor);