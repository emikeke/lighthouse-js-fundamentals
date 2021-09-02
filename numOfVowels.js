const numberOfVowels = function(data) {
  // Put your solution here

  let vowelTotal = 0;

  for (let d of data) {
    if (d === "a") {
      vowelTotal += 1;
    } else if (d === "e"){
      vowelTotal += 1;
    } else if (d === "i") {
      vowelTotal += 1;
    } else if (d === "o"){
      vowelTotal += 1;
    } else if (d === "u") {
      vowelTotal += 1;
    } else 
      vowelTotal += 0;
  }
  return vowelTotal;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));