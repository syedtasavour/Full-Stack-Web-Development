arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
};

arr.forEach(print);

arr.forEach((el) => {
    console.log(el);
});



function getMin(Num){
    let min = Num.reduce((minn, el)=>{
        if (minn > el) {
            return el;
        } else {
            return minn;
        }
    });
    return min;

}


let axx = [{
    name: "user",
    marks: 95
}, {
    name: "user1",
    marks: 75
}, {
    name: "user2",
    marks: 86
}];

let gpa = axx.map((el) => {
    return el.marks / 10;

});

axx.forEach((student) => {
    console.log(student.marks);
});

let num = [1, 2, 3, 4, 5];
let d = num.map((el) => {
    return el * el;
});

let n2 = num.filter((el) => {
    return el % 2 == 0;

});

arr = [1, 2, 3, 4, 5, 3, 4, 5, 44, 33, 4, 35, 6, 4, 1];

let nn = arr.reduce((max, el)=>{
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(nn);

let nums = arr.every((el)=>{
    el % 10 ==0;

});

