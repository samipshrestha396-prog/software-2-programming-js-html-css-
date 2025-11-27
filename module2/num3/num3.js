
let name=[];
for( let i=0; i< 6; i++){
  let dog_name=prompt("Enter the name of 6 dogs: ")
  name.push(dog_name);
}

let data=document.querySelector("#dog");
for(i=0;i<name.length;i++){
  let li= document.createElement("li");
  li.textContent=name[i];
  data.appendChild(li);
}