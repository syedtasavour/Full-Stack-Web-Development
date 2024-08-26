const student = {
    name: "ABCD",
    marks: 95,
    prop: this,
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.name;

    }
};
arr = [1,2,3,4,5];
let print = function (el){
    console.log(el);
};

arr.forEach(print);

