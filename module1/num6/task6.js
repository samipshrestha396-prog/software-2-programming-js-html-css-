
"use strict";

const outputResult=document.querySelector("#target");
alert("should I calculate the square root?");

const last_request=confirm("Are you sure?");
if (last_request===true){
  const input_num=parseFloat(prompt("Enter the number:"));
  if ( input_num<0){
    outputResult.innerHTML="The square root of a negative number is not defined";
  }else {
    const value=Math.sqrt(input_num);
    outputResult.innerHTML +=`The square root of ${input_num} is = `+ `${value}`;
  }
}
else{
  outputResult.innerHTML = "The square root is not calculated!";
}


