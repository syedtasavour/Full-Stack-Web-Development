function hi(a,b,c){
    let temp = (a+b+c)/3;
    console.log(temp);
}
function multi(a){
    for(let i = 1;i<11;i++)
        console.log(`${a} X ${i} = ${a*i}`);
    
}
function sum(a,b){
    return a+b;
}
multi(2);


function nsum (n){
    let temp = 0;
    for(i =1 ; i<=n;i++){
        temp = temp+i;

    }return temp;

}
 let str = ["hi","hello","bye","!"];
 function concat(str){
    let result;
    for(let i = 0; i<str.length;i++){
        result +=  " " + str[i];
    }return result;
 }
console.log(concat(str));








console.log(sum(sum(1,2),3));

console.log(nsum(5));