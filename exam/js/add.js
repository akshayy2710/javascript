import { navbar,handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML=navbar()
handleLogout();

const product=async(e)=>{
    e.preventDefault();
    let product={
        image:document.getElementById("productimg").value,
        name:document.getElementById("productname").value,
        price:document.getElementById("productprice").value,
        category:document.getElementById("category").value
    }
    if(product.image.length<=0){
        alert("Please upload an image")
        return
    }
    if(product.name.length<=0){
        alert("Please enter a product name")
        return
    }
    if(product.price.length<=0){
        alert("Please enter a product price")
        return
    }
    if(product.category.length<=0){
        alert("Please select a category")
        return
    }
    postdata(product)
    alert("Product uploaded successfully")
}
document.getElementById("productData").addEventListener("submit",product)