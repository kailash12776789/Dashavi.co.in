// Simple cart logic
let cart = [];

function addToCart(id, name, price) {
  cart.push({id, name, price});
  alert(name + ' added to cart');
}

window.onload = () => {
  const products = [
    {id:1, name:'Product A', price:499},
    {id:2, name:'Product B', price:799}
  ];
  const container = document.getElementById('products');
  products.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p><button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">Add to Cart</button>`;
    container.appendChild(div);
  });
};