let productdata = [];
let cart = [];

const getFormData = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    const product = {
        title,
        price,
        image,
    };

    productdata.push(product);
    displayproduct(productdata);
};

const displayproduct = (data) => {
    document.getElementById("display").innerHTML = "";
    data.map((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p");
        title.innerHTML =  value.title;

        const price = document.createElement("p");
        price.innerHTML = value.price;

        const image = document.createElement("img");
        image.src = value.image;
        image.style.width = "250px";       

        const addCartButton = document.createElement("button");
        addCartButton.innerHTML = " Cart";
        addCartButton.addEventListener("click", () => Cartproduct(value));

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteproductData(index));

        div.append(image, title, price, addCartButton, deleteButton);
        document.getElementById("display").append(div);
    });
};

const deleteproductData = (index) => {
    productdata.splice(index, 1);  
    displayproduct(productdata);      
};

const deletecartData = (index) => {
    cart.splice(index,1);
    displayCart();
};

const Cartproduct = (value) => {
    const result = cart.indexOf(value);

    if (result !== -1) {
        cart[result].qty++
    } else {
        value.qty = 1;
        cart.push(value);
    }
    displayCart();
};

const displayCart = () => {
    document.getElementById("cart").innerHTML = "";
    cart.map((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p"); 
        title.innerHTML = value.title;

        const price = document.createElement("p");
         price.innerHTML = value.price;

        const image = document.createElement("img");
        image.src = value.image;
        image.style.width = "250px"; 
        
        const quantity = document.createElement("p"); 
        quantity.innerHTML = value.qty;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deletecartData(index));

        div.append( image,title, price, quantity,deleteButton);
        document.getElementById("cart").append(div);
        

    });
};

document.getElementById("form").addEventListener("submit", getFormData);