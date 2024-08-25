try{
    console.log(a);
}catch(e){
    console.log(e);
}

const arfun = (a,b) => {
    console.log("arrow function");
    return a+b;
}

console.log(arfun(1,2));

const a = (a,b)=> (a*b);

a(2,4)

setTimeout(() =>{
    console.log("TimeOut");
},4000);

setTimeout((  )=>{
    console.log("arfun(1,2)");

},4000);
console.log(arfun(1,2));
console.log(arfun(1,2));
console.log(arfun(1,2));
console.log(arfun(1,2));
console.log(arfun(1,2));
console.log(arfun(1,2));
console.log(arfun(1,2));

let id = setInterval( ()=> {
    console.log("Interval");
},2000);
let idd = setInterval( ()=> {
    console.log("2nd");
},2000);

console.log("id "+id)
console.log("id "+idd)
