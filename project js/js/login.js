
let users = JSON.parse(localStorage.getItem("users")) || [];

 const logindata = (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;

  let User = users.find(user => user.email === email && user.password === password);

};

document.getElementById("SignUpBtn").addEventListener("submit" , logindata);