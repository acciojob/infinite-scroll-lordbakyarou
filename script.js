//your code here!

let getList = document.getElementById("infi-list");

let getMain = document.querySelector("main");

let num = 10;

function triggerThis(num, i) {
  console.log(i);
  for (let m = i; m <= num; m++) {
    let addList = document.createElement("li");
    addList.innerText = `Item ${m}`;
    getList.appendChild(addList);
  }
}

triggerThis(num, 1);

getList.addEventListener("scrollend", function () {
  num = num + 2;
  triggerThis(num, num - 1);
});
