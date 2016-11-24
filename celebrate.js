"use strict";
// function celebrate() {
// document.getElementById("demo").innerHTML = 5+6;
// }
console.log('is it working?');
var currentDate = new Date();
currentDate = currentDate.toString();
currentDate = currentDate.substr(4,6);
console.log('The current date is' + currentDate);
document.getElementById("currentDate").innerHTML=currentDate;
