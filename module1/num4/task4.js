const name= prompt("Enter you good name: ");
const radnumber= Math.floor(Math.random()*4)+1;
let section_name;
if (radnumber===1){
  section_name= "Gryffindor";
}
else if (radnumber===2){
  section_name= "Slytherin";
}
else if (radnumber===3){
  section_name=" Hufflepuff"
}
else{
  section_name=" Ravenclaw"
  }

document.querySelector("#target").innerHTML=`WEL-COME! ${name},you are in section ${section_name}.`;

