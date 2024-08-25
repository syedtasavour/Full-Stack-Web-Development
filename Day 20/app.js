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