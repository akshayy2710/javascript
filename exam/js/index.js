import { navbar, handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML = navbar();
handleLogout();

let data = JSON.parse(localStorage.getItem("signupdata")) || [];
let ProductContent = [];

const content = (displayData) => {
  document.getElementById("all-contents").innerHTML = ""; 
  displayData.map((items) => {
    let div = document.createElement("div");
    div.className = "main-contents";
    div.innerHTML = `
        <img src="${items.image}" alt="product-image">
        <h1>name: ${items.name}</h1>
        <h1>price: ${items.price} ₹</h1>
        <h1>category: ${items.category}</h1>
        <button class="delete-btn" data-id="${items.id}">delete</button>
      `;
    document.getElementById("all-contents").append(div);
  });
};

const sidebar = async () => {
  document.getElementById("sidebar").innerHTML = "";
  data.map((item) => {
    let div = document.createElement("div");
    div.className = "sidebar-content";
    div.innerHTML = `
      <img src="${item.img}" alt="profile-pic">
      <h1>${item.username}</h1>
    `;
    document.getElementById("sidebar").append(div);
  });
};


sidebar();

const searching = () => {
  let searchValue = document.getElementById("searching").value.toLowerCase();
  let filteredData = ProductContent.filter((ele) => 
    ele.name.toLowerCase().includes(searchValue)
  );
  content(filteredData);
};

document.getElementById("search").addEventListener("click", searching);

const sorting = (order) => {
  let sortedData = [...ProductContent];
  if (order === "lth") {
    sortedData.sort((a, b) => a.price - b.price);
  } else {
    sortedData.sort((a, b) => b.price - a.price);
  }
  content(sortedData);
};

document.getElementById("sort-select").addEventListener("change", (e) => {
  sorting(e.target.value);
});

const filterByCategory = (category) => {
  if (category === "all") {
    content(ProductContent);
  } else {
    let filteredData = ProductContent.filter((ele) => ele.category === category);
    content(filteredData);
  }
};

document.getElementById("filter").addEventListener("change", (e) => {
  filterByCategory(e.target.value);
});
