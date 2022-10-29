import faker from "faker";

const mount = (el: Element) => {
  const number = faker.datatype.number(12);
  const cart = `<div>You have ${number} items in your cart.</div>`;

  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
} else {
}

export { mount };
