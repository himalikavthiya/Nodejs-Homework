data = JSON.parse(localStorage.getItem("data")) || [];

// api url
const api_url = "http://localhost:8080/v1/gallery/get-images";

fetch(api_url)
  .then((response) => response.json())
  .then((apiData) => {
    localStorage.setItem("data", JSON.stringify(apiData.data));
    console.log(apiData.data);
    renderTable();
  })
  .catch((error) => console.log(error));

function renderTable() {
  const galleryContainer = document.getElementById("galleryContainer");
  galleryContainer.innerHTML = `
   ${data
     .map(
       (item) => `
       <div class ="container">
       <div class="responsive">
      <div class="gallery">
      <a target="_blank" href="${item.gallery_image}">
      <img src="${item.gallery_image}" alt="Cinque Terre" /></a>
      </div>

      <div class="desc">${item.image_name}</div>
    </div>
       </div> `
     )
     .join("")}
    `;
}
