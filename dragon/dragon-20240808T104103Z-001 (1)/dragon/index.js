const deleteAll = () => {
    arr = []
    document.getElementById("adddata").innerHTML = ""
}

let arr = [];
const del = (index) => {
    arr.splice(index, 1);
    dragon();
};
const buy = () => {

};
const dragon = () => {
    document.getElementById("adddata").innerHTML = "";
    arr.map((ele, i) => {
  
  
      let section = document.createElement("section");
      section.setAttribute();
  
      let img = document.createElement("img");
      img.src = ele.img;
      
      let div = document.createElement("div");
      div.innerHTML = `dname: ${ele.title}`;
      let div1 = document.createElement("div");
      div1.innerHTML = `price: ${ele.price}`;
  
      let div3 = document.createElement("div");
      div3.setAttribute();
  
      let btn2 = document.createElement("button");
      btn2.innerHTML = "buynow";
      btn2.addEventListener("click", () => buy(i));
      btn2.setAttribute();
  
     
      div3.append(btn, btn2);
      section.append(img, div, div1, div3);
  
      
      document.getElementById("adddata").append(section);
  
    });
  };
  
  const dragondata = (e) => {
    e.preventDefault();
    let database = {
      img: document.getElementById("img").value,
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      
    };
    arr.push(database);
    dragon();  

};

document.getElementById("getdata").addEventListener("submit", dragondata);