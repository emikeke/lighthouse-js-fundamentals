const urlEncode = function(text) {
  // Put your solution here

  text = text.trim(" ");
  let array = text.split(" ");
  let final = "";

  for (let x = 0; x < array.length; x++){
    if (array[x] === " "){
      final += "%20";
    } else {
      if (x === array.length - 1) {
        final += array[x];
      } else 
        final += array[x] + "%20";
    }
  }
  return final;
  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));