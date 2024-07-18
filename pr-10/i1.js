let arr = ["RED", "AND", "WHITE"];
let n = arr.length;
for (let i = 0; i < n; i++) {
  if (arr[i] == "AND") {
    console.log(arr[i].toLowerCase());
  } else {
    console.log(arr[i]);
  }
}