let products = "";

for (let i = 0; i < 3; i++) {
  const name = "faker.commerce.productName()";
  products += `<div>${name}</div>`;
}

const devProductsDiv = document.querySelector("#dev-products");

if (devProductsDiv) {
  devProductsDiv.innerHTML = products;
}

console.log(products);
