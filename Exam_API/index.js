let products = []; 

const ApiData = (data) => {
    document.getElementById("product-list").innerHTML = "";

    data.products.map((ele) => {
        let image = document.createElement('img');
        image.src = ele.thumbnail;

        let title = document.createElement('h3');
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = `$${ele.price}`;

        let category = document.createElement("p");
        category.innerHTML = ele.category;

        let rate = document.createElement("p");
        rate.innerHTML = `Rating: ${ele.rating}`;

        if (ele.rating > 4) {
            rate.style.color = "green";
        }
         else {
            rate.style.color = "red";
        }

        let div = document.createElement("div");
        div.style.cursor="pointer"
        div.addEventListener("click", ()=>{
            localStorage.setItem("id", ele.id);
        })
        div.append(image, title, price, category, rate);

        document.getElementById("product-list").append(div);
    });
}

const getData = async () => {
        let req = await fetch("https://dummyjson.com/products/");
        let res = await req.json();
        products = res; 
        ApiData(products);
  
}

getData();


const search = (e) => {
    e.preventDefault();

    let searchValue = document.getElementById("Search").value;
    let temp = products.products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    ApiData({ products: temp });
};

document.getElementById("Searching").addEventListener("submit", search);

document.getElementById("Search").addEventListener("keypress", (e) => {
    if(e.key=="Enter"){
    }
});


const HandleFilter = (category) => {
    let temp = products.products.filter((ele) => ele.category === category);
    ApiData({ products: temp });
}


document.getElementById("groceries").addEventListener("click" , ()=> HandleFilter("groceries"))
document.getElementById("furniture").addEventListener("click", ()=>  HandleFilter("furniture"))
document.getElementById("fragrances").addEventListener("click" ,()=>  HandleFilter("fragrances"))


const HandlePrice = (order) => {
    let temp;
    if (order === "LTH") {
        temp = products.products.sort((a, b) => a.price - b.price);
    } else {
        temp = products.products.sort((a, b) => b.price - a.price);
    }
    ApiData({ products: temp });
}



document.getElementById("lth").addEventListener("click", () => HandlePrice("LTH"));
document.getElementById("htl").addEventListener("click", () => HandlePrice("HTL"));