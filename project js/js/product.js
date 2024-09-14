import getValue, { createTag } from "../components/helper.js";
import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || []

const isExist = (id) => {
    // const products = cart.filter((ele) => ele.id == id)
    // if (products.length > 0) {
    //     alert("Product already exists");
    //     return true;
    // }
    // else {
    //     return false;
    // }

    let flag = false;
    cart.map((ele, i) => {

        if (ele.id == id) {
            cart[i].qty = cart[i].qty + 1
            flag = true;
            alert("quantity add")
        }
    })
    return flag;
}

const  productcart = (ele) => {
    if (!isExist(ele.id)) {

        cart.push({ ...ele, qty: 1 });
        alert("add to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(productcart);

}
const mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((ele) => {
        let img = createTag("img", ele.img);
        let price = createTag("p", ele.price);
        let title = createTag("h3", ele.title);
        let category = createTag("p", ele.category);
        let buyBtn = createTag("button", "Buy");
        buyBtn.addEventListener("click",()=>productcart(ele))
        let div = document.createElement("div");
        div.append(img, title, price, category, buyBtn);
        document.getElementById("productList").append(div);
    });
};

mapper(products);

const handleSort = (orderBy) => {
    if (orderBy == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);
        mapper(temp);
    } 
    else {
        let temp = products.sort((a, b) => b.price - a.price);
        mapper(temp);
    }
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
};
document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("men") .addEventListener("click", () => handleCategory("men"));
document .getElementById("women").addEventListener("click", () => handleCategory("women"));
document.getElementById("electronics").addEventListener("click", () => handleCategory("electronics"));

const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);

};

document.getElementById("searching").addEventListener("submit", search);