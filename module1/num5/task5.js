// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year.
//     A year is a leap year if it is divisible by four.
//     However, years divisible by 100 are leap years only
// if they are also divisible by 400. Print the result on the HTML document.

const year=prompt("Enter the year: ");
let leap_year;
if (year%4===0) {
  leap_year="It's a leap year!"
}
else if (year%100===0) {
  leap_year="It's not a leap year!"
}
else if (year%400===0) {
  leap_year="It's a leap year!"
}
else{
  leap_year="It's not a leap year!"
}
document.querySelector("#target").innerHTML=`<hr>${year}, ${leap_year}.</hr>`;
