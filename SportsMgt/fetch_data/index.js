data = JSON.parse(localStorage.getItem("data"));

// api url
const api_url = "http://localhost:8000/v1/gellery/gallerylist";

fetch(api_url)
  .then((response) => response.json())
  .then((apiData) => {
    localStorage.setItem("data", JSON.stringify(apiData));
    console.log(api_url);
    renderData();
  })
  .catch((error) => console.log(error));

function renderData() {
  const galleryimage = document.getElementById("gallery-image");
  galleryimage.innerHTML = `
     ${data
       .map(
         (item) => `
         <div class="img-box">
           <img src=${item.Images} alt="" />
           <div class="transparent-box">
             <div class="caption">
               <p>Library</p>
               <p class="opacity-low">Architect Design</p>
             </div>
           </div>
         </div>
    `
       )
       .join("")}
      `;
}
