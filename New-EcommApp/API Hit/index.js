data = JSON.parse(localStorage.getItem("data")) || [];

// api url
const api_url = "http://localhost:5000/v1/product/listproduct";

fetch(api_url)
  .then((response) => response.json())
  .then((apiData) => {
    localStorage.setItem("data", JSON.stringify(apiData.data));
    console.log(apiData.data);
    renderTable();
  })
  .catch((error) => console.log(error));

function renderTable() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = `
   ${data
     .map(
       (item) => `
       <div class="products" id="iphone-x">
       <img class="product-image" src="${item.product_img}"/>
       <p class="product-name">${item.product_name}</p>
       <p class="product-description">${item.description}</p>
       <p class="product-price">$${item.price}</p>
       <p class="product-category">${item.category.category_name}</p>
       <p class="product-subcategory">${item.subcategory.subcategory_name}</p>
       <p class="product-subchildcat">${item.subchildcate.subchildcat_name}</p>
       <button class="add-to-cart" id='test'>ADD TO CART</button>
   </div>
  `
     )
     .join("")}
    `;
}



{/* <div class="card">
<img src="${item.product_img}" class="card-image" alt="${item.product_name}">
<div class="card-body">
  <h2 class="card-title">${item.product_name}</h2>
  <p class="card-description">${item.description}</p>
  <p class="card-price">$${item.price}</p>
  <p class="card-category">${item.category.category_name}</p>
  <p class="card-subcategory">${item.subcategory.subcategory_name}</p>
  <p class="card-subchildcat">${item.subchildcate.subchildcat_name}</p>
  <button class="add-to-cart" id='test'>ADD TO CART</button>
</div>
</div> */}