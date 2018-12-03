// source goes here
var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");

    // AR - create a list of 144 elements and append to number container section
    // AR - efficient way of adding elements? Advice to not use innerHTML?
    // AR - no ES6? no template literals
    let numberCardElement = ``;
    let allNumberCardElements = ``;
    for (let i = 1; i < 145; i++) {
      numberCardElement = `<div><p class="number-card">${i}</p></div>`
      allNumberCardElements += numberCardElement;
    }
    let numberContainer = document.querySelector('.number-container');
    numberContainer.innerHTML = allNumberCardElements;
    
    let allCards = document.querySelectorAll('.number-card');

    toggleMultiples = function (e) {
      let target = e.target;
      if (target.classList.contains('number-card')){
        console.log("number card!");
        console.log(target.innerText);
        let clickedNumber = Number.parseInt(target.innerText);
        // console.log(allCards);
        allCards.forEach(function (element) {
          let otherCardNumber = element.innerText;
          if  (otherCardNumber % clickedNumber === 0) {
            console.log(`${otherCardNumber} is a multiple`)
            element.classList.toggle('highlight-card');
          }
        });

        

      }
      // console.log("click!");
      // console.log(e.target);
      // let divContainer = e.
    
    }
    numberContainer.addEventListener('click', toggleMultiples);
  }
};

module.exports = app;
