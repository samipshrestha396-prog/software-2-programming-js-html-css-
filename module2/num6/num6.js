

function dice_roll() {
    return Math.floor(Math.random() * 6) + 1;
}

let data = document.querySelector("#target"); // the <ul> element

while (true) {
  let value = dice_roll(); // roll the dice

  // create <li> for this roll and append
  let li = document.createElement("li");
  li.textContent = value;
  data.appendChild(li);

  if (value === 6) {
    break;
  }
}





