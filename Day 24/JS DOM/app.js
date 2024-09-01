
let nn = document.getElementById("mainImg");
nn.src = "assets/creation_1.png";

let n = document.getElementsByClassName("oldImg");
for (let i = 0; i < n.length; i++) {
    n[i].src = "assets/spiderman_img.png";
    console.dir(n[i].src);
}

let t = document.getElementsByTagName("p");
console.dir(document.querySelector("h1"));
console.dir(document.querySelectorAll("p"));

let img = document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id', 'spidermanImg');

let heading = document.querySelector('h1');
heading.style.color = 'red';
heading.style.backgroundColor = 'green';
console.dir(heading.style.color);

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "yellow";
}


for (let link of links) {
    link.style.color = "yellow";
}


let ul = document.querySelector("ul");

img2.previousElementSibling.style.color = 'red';

let p = document.createElement('p');
p.innerHTML = "I AM <b>appendChild:</b> ";
let box = document.querySelector('.box');
box.appendChild(p);

let btn = document.createElement('button');
btn.innerHTML = "Click Me";


let pp = document.querySelector('p');
const b = document.getElementsByTagName('button');
p.append("Hey i Am append");
p.prepend("I Am Prepend ");
box.insertAdjacentElement('beforeend', btn);
b[0].classList.add('button-1');
box.removeChild(btn);
p.remove();

let input = document.createElement('input');

let btn2 = document.createElement('button');
btn2.innerText = "Click Me";
let body = document.querySelector('body');
body.appendChild(btn2);
body.insertAdjacentElement('afterend', input);
input.placeholder = "username";
document.getElementsByTagName('button')[0].id = 'btn';

let btc = document.querySelector("#btn");
btc.style.color = 'white';
btc.style.backgroundColor = 'blue';

let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
body.insertAdjacentElement('beforebegin', h1);
h1.style.textDecoration = 'underline';