import { navbar,handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML=navbar()
handleLogout();

let data = JSON.parse(localStorage.getItem("signupdata")) || []; 

const logindata = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    let isMatches = data.filter(
        (ele) => ele.email === user.email && ele.password === user.password
    );

    if (isMatches.length > 0) {
        alert("Login successful");
        localStorage.setItem("username", isMatches[0].username); 
        localStorage.setItem("Login", true); 
        window.location.href = "/exam/index.html";
    } else {
        alert("Invalid email or password");
    }
};

document.getElementById("userData").addEventListener("submit", logindata);
