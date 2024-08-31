//Swiper Js Config
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Selection of elems

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  document.querySelector(".nav-right").classList.toggle("show");
});

//fetching products

async function fetchProduct() {
  try {
    const product = await fetch("https://fakestoreapi.com/products/");
    const data = await product.json();
    console.log(data);
    populateData(data);
  } catch (error) {
    console.error("Error aya bro", error);
  }
}
fetchProduct();

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength);
  } else {
    return text;
  }
}
let cart = [];
function populateData(data) {
  data.forEach((items) => {
    const description = truncate(items.description, 80);
    const title = truncate(items.title, 40);
    document.querySelector(
      ".product-list"
    ).innerHTML += ` <div class="product-card">
                  <img src="${items.image}" alt="">
                  <div class="product-des">
                      <h2>${title}</h2>
                      <p>${description}</p>
                        <h3>${items.price} Rs</h3>
                    </div>
                    <div class="btn">
                        <button data-product-id="${items.id}">Add to Cart</button>
                    </div>`;
  });
  const btn = document.querySelectorAll("button");
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");
      if (button.textContent === "Add to Cart") {
        button.textContent = "Added";
        cart.push(productId);
      } else {
        button.textContent = "Add to Cart";
        cart = cart.filter((id) => id !== productId);
      }
      popup(button.textContent);
      savetoLocalStorage();
    });
  });
}

function popup(text) {
  const pop = document.querySelector("#popup");
  const p = document.querySelector("#popup span");
  p.textContent = text === "Added" ? "Add to Cart" : "Removed from Cart";
  pop.style.backgroundColor = text === "Added" ? "green" : "red";
  pop.classList.add("show");
  setTimeout(() => {
    pop.classList.remove("show");
  }, 2000);
}

function savetoLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
