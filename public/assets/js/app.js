"use strict"
// LES VARIABLES 

let headerBtn = document.querySelector(".slider");
let perYear = document.querySelector(".year");
let perMonth = document.querySelector(".month");
// --------------------------------------------------
let btns = document.querySelector("button");

 headerBtn.addEventListener('click', function () {
         perYear.classList.toggle('active');
         perMonth.classList.toggle('active');
    
})

//  BUTTON - LEARN MORE
btns.addEventListener('click', function () {
    btns.classList.toggle('active');
})

