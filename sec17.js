// console.log("exporting module");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 100;
const totalQuantity = 12;

export { totalPrice, totalQuantity as tQ };
