import getValues from "../component/helper.js";
import Navbar from "../component/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let users = JSON.parse(localStorage.getItem("users")) || [];

const mapper = (data) => {
  document.getElementById("tbody").innerHTML = "";
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.dateOfBirth}</td>
      <td>${user.course}</td>
      <td>${user.fee}</td>
    `;
    document.getElementById("tbody").append(row);
  });
};

mapper(users);

const handleSort = (orderBy) => {
  if (orderBy == "lth") {
    let temp = users.sort((a, b) => a.fee - b.fee);
    mapper(temp);
  } else {
    let temp = users.sort((a, b) => b.fee - a.fee);
    mapper(temp);
  }
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));


const handleCourse = (course) => {
  let temp = users.filter((ele) => ele.course == course);
  mapper(temp);
};

document
  .getElementById("it")
  .addEventListener("click", () => handleCourse("Information Technology"));
document
  .getElementById("cs")
  .addEventListener("click", () => handleCourse("Computer Science"));

document
  .getElementById("bt")
  .addEventListener("click", () => handleCourse("Bio Technology"));
document
  .getElementById("mb")
  .addEventListener("click", () => handleCourse("Micro Biology"));

  
const search = (e) => {
  e.preventDefault();

  let searchValue = getValues("#search");
  let temp = users.filter((ele) => ele.name.toLowerCase().includes(searchValue.toLowerCase()));
  mapper(temp);

};

document.getElementById("searching").addEventListener("submit", search);


document.getElementById("search").addEventListener("keypress", (e) => {
if(e.key=="Enter"){
  
}
});