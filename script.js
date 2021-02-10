"use strict";
let cardForm = document.querySelector(".card-form");
cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(cardForm);
  let cardName = snapshot.get("name");
  let cardDesc = snapshot.get("description");
  let cardType = snapshot.get("type");
  console.log(cardName, cardDesc, cardType);
});
