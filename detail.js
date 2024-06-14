const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTgzNTI4MjIsImV4cCI6MTcxOTU2MjQyMn0.nBhbAzXaX0EtPTQVuzRR7iagO6vqQ0IgtghLwCAaFQA";

const id = new URLSearchParams(window.location.search).get("_id");

console.log(id); // null

window.addEventListener("DOMContentLoaded", () => {
  fetch(PRODUCT_URL + id)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    })
    .then((productObj) => {
      const row = document.getElementById("row");

      const { name, description, brand, imageUrl, price, _id } = productObj;
      row.innerHTML = `
                <h1 class="display-5">${name}</h1>
                    
                    <p class="lead">${description}</p>
                    <p class="display-6 text-primary">${price ? price + "€" : "gratis"}</p>

                    <h6 class="bg-light ps-2 py-3">Server Details:</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-2"><strong>id:</strong> ${_id}</li>
                        
                        <li class="list-group-item ps-2"><strong>updatedAt:</strong> ${brand}</li>
                        <li class="list-group-item ps-2"><strong>updatedAt:</strong> ${imageUrl}</li>
                    </ul>
                    <button class="btn btn-success mt-4" onclick="handleEditBtnClick()">Modifica Appuntamento</button>`;
    })
    .catch((err) => console.log(err));
});
const handleBtnClick = () => {
  window.location.assign(":/backoffice.html?_id=" + id);
};
