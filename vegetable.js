const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let finalVegetable = vegetables[0];
    
  for (let vegetable of vegetables) {
    if (metric === "redness") {
      if (finalVegetable.redness <= vegetable.redness) {
        finalVegetable = vegetable;
      }
    } else if (metric === "fullness") {
      if (finalVegetable.fullness <= vegetable.fullness) {
        finalVegetable = vegetable;
      }
    }
  }
  return finalVegetable.submitter;
};


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));