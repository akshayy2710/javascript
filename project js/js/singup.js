let users = JSON.parse(localStorage.getItem("users")) || [];

  const signupdata = (e) => {
  e.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("Password").value,
  };

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "./login.html";
};

document.getElementById("SignUpBtn").addEventListener("submit" , signupdata);