const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTgzNTI4MjIsImV4cCI6MTcxOTU2MjQyMn0.nBhbAzXaX0EtPTQVuzRR7iagO6vqQ0IgtghLwCAaFQA";

const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("_id");
console.log("RESOURCE ID:", id);

const generaCard = (products) => {
  const row = document.getElementById("row-card");
  row.innerHTML = ``;
  products.forEach((product) => {
    const col = document.createElement("div");
    col.classList.add("col");
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h3");
    title.classList.add("card-title");
    const description = document.createElement("p");
    description.classList.add("card-text");
    const price = document.createElement("h5");
    price.classList.add("card-text");

    img.src = product.imageUrl;
    img.setAttribute("alt", product.imageUrl);
    card.style.maxHeigth = "200px";

    title.innerText = product.name;
    description.innerText = product.description;
    price.innerText = product.price;

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    col.appendChild(card);
    row.appendChild(col);

    console.log(card);

    const handleCardClick = () => {
      window.location.assign("./detail.html?_id=" + id);
    };
    card.addEventListener("click", () => {
      handleCardClick();
    });
  });
};

const fetchProduct = () => {
  fetch(PRODUCT_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errorre nel riperimento dei dati");
      }
    })
    .then((products) => {
      console.log(products);
      generaCard(products);
    })
    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  fetchProduct();
});
