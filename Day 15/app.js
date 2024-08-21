<<<<<<< Updated upstream
let a = 56;
let temp = a;
let b =0;
let x = 0;
for (i =0;temp>i;){
    b = temp%10;
    temp = (temp-b)/10;
    x = b +x;
}console.log(x);
let n =5;
let v = 1;

for (let i = 1; i <= n; i++){
    console.log(i); 
    v *= i;
    console.log(`${v}"*="${i}" : " `);
} console.log(v); 

let array = [1,34,5,6,7,8,9,4,,2,2,2,232,32,33,223,54,76];
let min = null;
for(greatest of array){
    if(greatest >= min){
        min = greatest;
    }console.log(min);
=======
let h = [["ironman", "Spiderman", "thor"], ["superman", "wonder women", "flash"]];
for (let i = 0; i < h.length; i++) {
    console.log(`List ${i}`);
    for (let j = 0; j < h[i].length; j++) {
        console.log(h[i][j]);
    }
>>>>>>> Stashed changes
}