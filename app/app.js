// source goes here
var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");

    // AR - create a list of 144 elements and append to number container section

    let numberCardElement = ``;
    let allNumberCardElements = ``;
    for (let i = 1; i < 145; i++) {
      numberCardElement = `<div><p class="number-card">${i}</p></div>`
      allNumberCardElements += numberCardElement;
    }
    document.querySelector('.number-container').innerHTML = allNumberCardElements;
  }
};

module.exports = app;
