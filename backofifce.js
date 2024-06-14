const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTgzNTI4MjIsImV4cCI6MTcxOTU2MjQyMn0.nBhbAzXaX0EtPTQVuzRR7iagO6vqQ0IgtghLwCAaFQA";
const id = new URLSearchParams(window.location.search).get("_id");

const URL = id ? PRODUCT_URL + id : PRODUCT_URL;
const method = id ? "PUT" : "POST";

window.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.getElementById("subtitle");

  document.getElementById("product-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imgUrl").value;
    const price = document.getElementById("price").value;

    if (id) {
    }
  });
});
const handleSubmit = (event) => {
  event.preventDefault();

  fetch(URL, {
    method,
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella creazione di prodotti");
      }
    })
    .then((createdProduct) => {})
    .catch((err) => console.log(err));
};
