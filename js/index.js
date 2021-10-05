// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input'); 
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value; 
  let totalProductValue = priceValue * quantityValue; 
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalProductValue; 
  console.log('Calculating subtotal, yey!');
  return totalProductValue;
}   

function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  const allTheProducts = document.querySelectorAll('.product');
  allTheProducts.forEach(product) {
  let totalPrice = 0; 
    totalPrice += updateSubtotal(product);
    console.log(totalPrice);

  const totalValue = document.getElementById('total-value');
    totalValue.innerText = totalPrice;
    console.log('Calculating total, yey!');
    return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
window.addEventListener('load', () => {
  const removeProductBtn = document.querySelector('Remove'); 
  removeProductBtn.addEventListener('click', removeProduct); 
})
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})}
