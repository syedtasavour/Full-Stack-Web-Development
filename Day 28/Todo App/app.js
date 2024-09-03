const btn = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", addTask);

function addTask() {
  const task = inp.value.trim();
  if (task) {
    const newLi = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("Delete");
    newLi.innerText = task;
    ul.appendChild(newLi);
    newLi.appendChild(btn);
    clearBox();
  }
}

function clearBox() {
  inp.value = "";
}

let delBtns = document.querySelectorAll(".Delete");

for (let delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    console.log(this.parentElement);
    par.remove();
  });
}
