function con_cat(para){
  let name=" ";
  for(let i=0; i< para.length;i++){
    name+=para[i];
  }
return name;
}

let inp_name=["Johnny", "DeeDee", "Joey","Marky"];
let data= con_cat(inp_name);
document.querySelector(".target").innerHTML=data;