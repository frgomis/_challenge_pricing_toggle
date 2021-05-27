"use strict"
// LES VARIABLES 
// let annual = document.querySelector(".annually");
// let eachMonth = document.querySelector(".monthly");
let headerBtn = document.querySelector(".slider");
let freq = document.querySelectorAll(".frequency");
let perYear = document.querySelector(".year");
let perMonth = document.querySelector(".month");
// --------------------------------------------------
let btn = document.querySelector("button");

headerBtn.addEventListener('click', function() {
        perYear.classList.toggle('active');
        perMonth.classList.toggle('active');
})





//  btn LEARN MORE
btn.addEventListener('click', function(){
    btn.classList.toggle('active')
    
})

