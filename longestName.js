const instructorWithLongestName = function(instructors) {
  // Put your solution here

  let longestObject = instructors[0];
  for (let instructor of instructors){
    if (instructor.name.length > longestObject.name.length){
      longestObject = instructor;
    }  
  }
  return longestObject;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));