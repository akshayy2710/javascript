import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];
const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  let isMatched = users.filter(
    (ele) => ele.email == user.email && ele.password == user.password
  );

  if (isMatched.length > 0) {
    alert("login done")
     
    localStorage.setItem("username",isMatched[0].username)
    localStorage.setItem("isLogin", true)
    window.location.href = "/index.html"
  }
  else {
    alert(" Not login")
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);