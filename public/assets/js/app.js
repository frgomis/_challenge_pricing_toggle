"use strict"
// LES VARIABLES 
let headerBtn = document.querySelector(".slider");
let freq = document.querySelectorAll(".price");
let btns = document.querySelectorAll("button");
console.log(btns);

//--------------------------------------------------
// PRICE : Month vs Year
headerBtn.addEventListener('click', ()=>{
    for(let i=0; i<freq.length; i++){
        freq[i].classList.toggle('active');
     }
});
//--------------------------------------------------
//  BUTTON - LEARN MORE
btns.forEach((elements) =>{
    elements.addEventListener('click', () => {
        for(let j = 0; j < btns.length; j++) {
            btns[j].classList.toggle('active');
        }
    });
});
