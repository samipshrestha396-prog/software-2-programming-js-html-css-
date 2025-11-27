// Write a program that asks the user for the number of participants.
//     After this, the program asks for the names of all participants.
//     Finally, the program prints the names of the participants on
// the web page in an ordered list (<ol>) in alphabetical order. (2p)

let number_ppl=parseInt(prompt("Enter the number of participant: "))
let name_of_ppl=[];
for (let i=0; i<number_ppl;i++){
  const name=prompt("Enter the name of participants: ")
  name_of_ppl.push(name);
}

name_of_ppl.sort();
let list=document.querySelector("#target");
for (let i=0;i<name_of_ppl.length;i++){
  let li=document.createElement("li");
  li.textContent=name_of_ppl[i];
  list.appendChild(li);

}

