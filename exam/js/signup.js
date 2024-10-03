
import { navbar,handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML = navbar();

handleLogout();

let data = JSON.parse(localStorage.getItem("signupdata")) || [];
const checkLogin = () => {
  let username = localStorage.getItem("username");
  if (username) {
    document.getElementById("UserData").style.display = "none";
    document.getElementById("second-div").style.display = "block";

    const User = data.find((user) => user.username === username);
    document.getElementById("second-div").innerHTML = `
                <div class="profile-container">
                      <img src="/exam/img/profile-picture1.jpg" alt="Profile Picture" class="profile-image" />
                    <h2 class="user-name">Name: ${User.username}</h2>
                    <p class="user-email">Email: ${User.email}</p>
                </div>
            `;
  } else {
    document.getElementById("UserData").style.display = "block";
    document.getElementById("second-div").style.display = "none";
  }
};

checkLogin();

const usersdata = (e) => {
  e.preventDefault();
  let user = {
    img: document.getElementById("img").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  data.push(user);
  localStorage.setItem("signupdata", JSON.stringify(data));
  alert("signup successful"); 
  window.location.href = "/exam/pages/login.html";
};

document.getElementById("UserData").addEventListener("submit", usersdata);