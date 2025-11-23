let sum=0;
const dice_roll=parseInt(prompt("Enter a number: "));
for (let i=0; i< dice_roll; i++){
  let random_value=(Math.floor(Math.random()*6)+1);
  sum+=random_value;
}
document.querySelector("#target").innerHTML +=`Total sum: ${sum}`;


