"use strict"
// LES VARIABLES 
let annual = document.querySelector(".annually");
let eachMonth = document.querySelector(".monthly");
let year = document.querySelector(".perYear");
let month = document.querySelector(".perMonth");
let btn = document.querySelector("button");

annual.addEventListener('click', change);
eachMonth.addEventListener('click', change);
function change (){
    year.classList.toggle('toHide');
    month.classList.toggle('active');
}






//  btn LEARN MORE
btn.addEventListener('click', function(){
    btn.classList.toggle('active')
    
})

