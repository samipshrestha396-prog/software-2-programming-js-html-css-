let prompt1 = parseInt(prompt( "ENTER 1st Number: "));
let prompt2 = parseInt(prompt( "ENTER 2nd Number: "));
let prompt3 = parseInt(prompt( "ENTER 3rd Number: "));
const sum=(prompt1+prompt2+prompt3)
const pdt=prompt1*prompt2*prompt3
const average= (prompt1+prompt2+prompt3)/3
document.querySelector('#sum').innerHTML="Total sum =" + sum + "<br><hr>";
document.querySelector('#product').innerHTML +="Product =" + pdt + "<br>"+"<hr>";
document.querySelector('#avg').innerHTML +="Average =" + average ;

