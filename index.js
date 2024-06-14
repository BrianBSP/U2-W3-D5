const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTgzNTI4MjIsImV4cCI6MTcxOTU2MjQyMn0.nBhbAzXaX0EtPTQVuzRR7iagO6vqQ0IgtghLwCAaFQA";

const generaCard = (products) => {
  const row = document.getElementById("row-card");
  row.innerHTML = ``;
  products.foreach((product) => {});
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
