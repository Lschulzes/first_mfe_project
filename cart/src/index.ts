import faker from "faker";

const number = faker.datatype.number(12);
const cart = `<div>You have ${number} items in your cart.</div>`;

const devCartDiv = document.querySelector("#dev-cart");

if (devCartDiv) {
  devCartDiv.innerHTML = cart;
}
