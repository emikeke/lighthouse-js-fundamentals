const sumLargestNumbers = function(data) {
  // Put your solution here

  if (data.length === 0) {
    return "empty array";
  } 
  let largest = data[0];
  let secondLargest = data[0];

  for (let x = 1; x < data.length; x++) {
    if (data[x] >= largest) {
      secondLargest = largest;
      largest = data[x];
    } else if (data[x] >= secondLargest) {
      secondLargest = data[x];
    }
  } return `${largest}, ${secondLargest}`;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));