const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
  case 'waste':
    bins['waste'] += 1;
    break;
  case 'recycling':
    bins['recycling'] += 1;
    break;
  case 'compost':
    bins['compost'] += 1;
    break;
  }
  return bins;
};

let bins = {
  waste: 4,
  recycling: 5,
  compost: 6
}

console.log(smartGarbage('recycling', bins));