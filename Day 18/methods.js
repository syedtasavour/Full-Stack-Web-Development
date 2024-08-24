const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};



let arr = [11, 2, 1, 4, 0, 6, 111];
function array(arr, n) {
    let larger = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            larger.push(arr[i]);
        }
    } return larger;

};
let ret = array(arr, 2);
for (let i = 0; i < ret.length; i++) {
    console.log(ret[i]);

}

// let str = "abcdabcdefgggh";

// function strr(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             if (str[i] == str[j + 1]) {
//                 str = str.replace(str[j], '');
//                 console.log(str[j])
//             }
//         }
//     } console.log(str)
// }
