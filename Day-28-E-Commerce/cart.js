let cart = [];
const subTotal = document.querySelector("#totalVal");

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  // console.log("Loaded saved data", cart);
} else {
  console.log("No saved data");
}

const getProduct = async function () {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    const cartProducts = data.filter((item) =>
      cart.includes(item.id.toString())
    );
    populateData(cartProducts);
    // console.log(cartProducts);
  } catch (error) {
    console.error("Error aa gya bro", error);
  }
};
getProduct();

function populateData(cartProducts) {
  const cartContainer = document.querySelector("#cart");
  // cartContainer.innerHTML = "";
  cartProducts.forEach((products) => {
    cartContainer.innerHTML += `
            <div class="cart-item-row">
                <div class="cart-item">${products.title}</div>
                <div class="cart-price">${products.price} </div>
                <div class="cart-quantity">
                <i class="ri-subtract-fill sub"></i>
                <input type="number" value="1" min="1">
                 <i class="ri-add-line add"></i>
                </div>
                <div class="cart-total">${products.price} </div>
            </div>
`;
  });
  updateSubtotal();
  cartContainer.addEventListener("click", (event) => {
    const target = event.target;
    const cartItem = target.closest(".cart-item-row");
    if (!cartItem) return;
    const price = +cartItem.querySelector(".cart-price").textContent;
    let total = cartItem.querySelector(".cart-total");
    const counter = cartItem.querySelector("input");

    if (target.classList.contains("sub")) {
      let initialVal = +counter.value;
      if (initialVal > counter.min) {
        let result = (counter.value = initialVal - 1);
        total.textContent = price * +result;
      }
    }

    if (target.classList.contains("add")) {
      let initialVal = +counter.value + 1;
      // initialVal = counter.value + 1;
      let result = (counter.value = initialVal);
      total.textContent = price * +result;
    }

    updateSubtotal();
  });
}

function updateSubtotal() {
  const cartTotal = document.querySelectorAll(".cart-total");
  const cartRemaining = Array.from(cartTotal).splice(1);
  let subtotal = 0;
  cartRemaining.forEach((total) => {
    subtotal += Number(total.textContent);
  });
  subTotal.value = subtotal.toFixed(2) + " Rs";
}
