const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTgzNTI4MjIsImV4cCI6MTcxOTU2MjQyMn0.nBhbAzXaX0EtPTQVuzRR7iagO6vqQ0IgtghLwCAaFQA";
const id = new URLSearchParams(window.location.search).get("_id");

const URL = id ? PRODUCT_URL + id : PRODUCT_URL;
const method = id ? "PUT" : "POST";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);

  const newProduct = {
    name: event.elements.name.value,
    description: event.target.elements.description.value,
    brand: event.target.elements.brand.value,
    imageUrl: event.target.elements.iamgeUrl.value,
    price: event.target.elements.price.value,
  };

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
    .then((createdProduct) => {
      if (id) {
        alert(`Prodotto ${createdProduct.name} MODIFICATO!`);
      } else {
        alert(`Prodotto ${createdProduct.name} CREATO!`);
      }
    })
    .catch((err) => console.log(err));
};
const handleDelite = () => {
  const confermare = confirm("Sei sicuro di voler eliminare questo appuntamento?");

  if (confermare) {
    fetch(URL, { method: "DELETE" })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((deleteProduct) => {
        alert(`Hai eliminato l'appuntamento ${deleteProduct.name}`);
        window.location.assign("/");
      });
  }
};
window.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.getElementById("subtitle");
  const submitBtn = document.getElementById("sub-btn");
  const deleteBtn = document.getElementById("del-btn");
  const form = document.getElementById("form-product");

  form.addEventListener("submit", () => {
    handleSubmit;
  });
});
