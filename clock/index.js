const times = document.getElementById("time");
const dates = document.getElementById("date");

const clock = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();


 if (minutes < 10) {
  minutes = "0" + minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}
  
if (hours < 10) {
  hours = "0" + hours;
}
  
  if (hours > 12) {
  hours -= 12;
}

times.innerHTML = `${hours}:${minutes}:${seconds}`;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayMonth = date.getDate();
const year = date.getFullYear();
const weekDay = days[date.getDay()];
const month = months[date.getMonth()];
dates.innerHTML = `${weekDay}, ${dayMonth} ${month} ${year}`;
}
clock();
setInterval(clock, 1000);
