
//  checking leap year with noraml way
// const first_year=parseInt(prompt("Etnter a first year: "));
// const last_year=parseInt(prompt("Enter a last year: "));
// for (let year=first_year; year<=last_year;year++){
//   if((year%4===0 && year%100!==0)|| year%400===0){
//     let ul=document.getElementById("list")
//     let li=document.createElement("li");
//     li.textContent= year;
//     ul.appendChild(li);
//
//
//   }
//
// }


// using function to check leap year
const first_year=parseInt(prompt("Enter a first year: "));
const last_year=parseInt(prompt("Ente a last year :"));
function leap_year(first,last){
  for (let year=first_year; year<= last_year; year++){
     if ((year%400===0) || (year%100!==0 && year%4===0)){

       let ul= document.querySelector("#list");
       let li= document.createElement("li");
       li.textContent= year;
       ul.appendChild(li);


    }
  }
}
leap_year(first_year,last_year);