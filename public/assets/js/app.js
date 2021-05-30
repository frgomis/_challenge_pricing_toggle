"use strict"
// LES VARIABLES 
let headerBtn = document.querySelector(".slider");
let freq = document.querySelectorAll(".price");
let btnLearnMore = document.querySelectorAll("button");
console.log(btnLearnMore);
//--------------------------------------------------
// PRICE : Month vs Year
headerBtn.addEventListener('click', ()=>{
    for(let i=0; i<freq.length; i++){
        freq[i].classList.toggle('active');
     }
});
//--------------------------------------------------
//  BUTTON - LEARN MORE
btnLearnMore.addEventListener('click', () => {
    for(let i = 0; i < btnLearnMore.length; i++) {
        btnLearnMore[i].classList.toggle('active');
    }
});

