let title = document.querySelector(".title");
let role = "x";
let box = [];
function game(id) {
  let item = document.getElementById(id);
  if (item.innerHTML === "" && role === "x") {
    item.innerHTML = "x";
    role = "o";
    title.innerHTML = "o";
    title.style.color = "#dc3545";
  } else if (item.innerHTML === "" && role === "o") {
    item.innerHTML = "o";
    role = "x";
    title.innerHTML = "x";
  }
  winner();
}
function winner() {
  for (let i = 1; i < 10; i++) {
    box[i] = document.getElementById("item" + i).innerHTML;
  }
  if (box[1] === box[2] && box[2] === box[3] && box[3] !== "") {
    reload(1, 2, 3);
  } else if (box[4] === box[5] && box[5] === box[6] && box[6] !== "") {
    reload(4, 5, 6);
  } else if (box[7] === box[8] && box[8] === box[9] && box[9] !== "") {
    reload(7, 8, 9);
  } else if (box[1] === box[4] && box[4] === box[7] && box[7] !== "") {
    reload(1, 4, 7);
  } else if (box[2] === box[5] && box[5] === box[8] && box[8] !== "") {
    reload(2, 5, 8);
  } else if (box[3] === box[6] && box[6] === box[9] && box[9] !== "") {
    reload(3, 6, 9);
  } else if (box[1] === box[5] && box[5] === box[9] && box[9] !== "") {
    reload(1, 5, 9);
  } else if (box[3] === box[5] && box[5] === box[7] && box[7] !== "") {
    reload(3, 5, 7);
  }
}
function reload(num1, num2, num3) {
  title.innerHTML = `${box[num1]} winner`;
  document.getElementById("item" + num1).classList.add("color");
  document.getElementById("item" + num2).classList.add("color");
  document.getElementById("item" + num3).classList.add("color");
  swal({
    title: `${box[num1]} winner`,
    text: "New Game",
    icon: "success",
    button: "OK",
  }).then((value) => {
    if (value) {
      location.reload();
    }
  });
}
