import Navbar from "../component/Navbar.js";


document.getElementById("navbar").innerHTML =Navbar()


let users = JSON.parse(localStorage.getItem("users")) || [];


const handleData = (e) => {
  e.preventDefault();

  let name = document.getElementById('floatingname').value;
  let email = document.getElementById('floatingInput').value;
  let phone = document.getElementById('floatingphno').value;
  let dateOfBirth = document.getElementById('floatingdate').value;
  let course = document.getElementById('floatingSelect').value; 
  let fee = document.getElementById('floatingfee').value;

  console.log(name, email, phone,dateOfBirth, course, fee); 

  if (name && email && phone && dateOfBirth && course && fee) {
    let user = {
      name, email, phone, dateOfBirth, course, fee
    };
users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      e.target.reset();
      alert('Student Registered Successfully');
    
  } else {
    alert('Please fill in all fields');
  }

};
document.querySelector("#userData").addEventListener("submit", handleData)