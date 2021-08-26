function range(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined){
    return array;
  } else if (start > end) {
    return array;
  } else if (step <= 0) {
    return array;
  }
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
};
