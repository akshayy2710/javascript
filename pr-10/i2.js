let str = "red and white";
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let cot = 0;
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    cot++;
  }
}
console.log(cot);
