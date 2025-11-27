
let num_roll=parseInt(prompt("Enter the number of rolls:"))
function dice_roll() {
    return Math.floor(Math.random() * 6) + 1;
}

let data = document.querySelector("#target"); // the <ul> element
let roll=0;
while (roll< num_roll) {
  let value = dice_roll(); // roll the dice


  let li = document.createElement("li");
  li.textContent = value;
  data.appendChild(li);

    roll++


}