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
                        <button>Add to Cart</button>
                    </div>`;
  });
}
