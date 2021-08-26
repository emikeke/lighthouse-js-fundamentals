function lastIndexOf (array, value) {
  let finalIndex = -1;
  for (let i = 0; i < array.length; i++)
    if (array[i] === value) {
      finalIndex = i;
    }
  return finalIndex;
}