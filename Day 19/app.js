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