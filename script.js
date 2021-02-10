"use strict";
let cardForm = document.querySelector(".card-form");
let cardContainer = document.querySelector(".card-container");

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(cardForm);
  let cardName = snapshot.get("name");
  let cardDesc = snapshot.get("description");
  let cardType = snapshot.get("type");
  console.log(cardName, cardDesc, cardType);
  let card = document.createElement("div");
  card.classList.add("card");
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = cardName;
  let descParagraph = document.createElement("p");
  descParagraph.textContent = cardDesc;
  let typeParagraph = document.createElement("p");
  typeParagraph.textContent = cardType;
  card.append(nameParagraph, descParagraph, typeParagraph);
  cardContainer.append(card);
});
