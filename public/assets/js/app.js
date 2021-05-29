"use strict"
// LES VARIABLES 
let headerBtn = document.querySelector(".slider");
let freq = document.querySelectorAll(".price");
// let perMonth = document.querySelectorAll(".month");
// let perYear = document.querySelectorAll(".year");
let btnLearnMore = document.querySelectorAll("button");
console.log(freq);
//--------------------------------------------------
// PRICE : Month vs Year
// headerBtn.addEventListener('click', ()=>{
//     perYear.classList.toggle('active');
//     perMonth.classList.toggle('active');
// });

freq.forEach( (freqs) =>{
    headerBtn.addEventListener('click', () => {
        console.log(headerBtn);
        for(let j = 0; j < freqs.length; j++) {
            freq[j].classList.toggle('active');
            
        }
    });
});
//--------------------------------------------------
//  BUTTON - LEARN MORE
btnLearnMore.forEach((elements) =>{
    
    elements.addEventListener('click', () => {
        for(let i = 0; i < btnLearnMore.length; i++) {
            btnLearnMore[i].classList.toggle('active');
            
        }
        
    });

});


// let footers = document.querySelectorAll('footer');

// let iconsShare = document.querySelectorAll('.icons');


// iconsShare.forEach( (elementsdutableau) => {

//     elementsdutableau.addEventListener('click', ()=> {

//         for(i=0; i < footers.length; i++) {
//             footers[i].classList.toggle('inactive');
//             footers[i].classList.toggle('active');
//         }
//     });
// });