import getvalue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()
let isLogin = localStorage.getItem("isLogin") || false;

if (isLogin == false) {
    window.location.href = "/pages/login.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];

const productsubmit = (e) =>{
    e.preventDefault();

    let addproduct ={
        title: getvalue(".title"),
        price: getvalue(".price"),
        category: getvalue(".cetegory"),
        img: getvalue(".img"),
    };
    products.push(addproduct);
    localStorage.setItem("products", JSON.stringify(products));

};

document.querySelector("#productdata").addEventListener("submit",productsubmit);