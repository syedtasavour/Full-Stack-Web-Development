let btns = document.querySelectorAll('button');
// btn.onclick = function() {
//     console.log('Button Was Clicked');

// }

function sayHi() {
    alert("Hi!");
    
}

// for(btn of btn){
//     btn.onclick = sayHi;
//     btn.onmouseenter = function() {
//         console.log('You Entered A Button');
//     };
// }


for(btn of btns){
    btn.addEventListener('click',sayHi);

}