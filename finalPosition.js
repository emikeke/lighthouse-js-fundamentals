const finalPosition = function (moves) {
  // Your code in here ...
  let xy = [];
  if (moves.length === 0){
    xy.push(0);
    xy.push(0);
    return xy;
  }
  let x = 0;
  let y = 0;
  for(let i = 0; i < moves.length; i++){
    switch (moves[i]){
    case "east":
        x++;
        break;
    case "west":
        x--;
        break;
    case "north":
        y++;
        break;
    case "south":
        y--;
        break;
    }
  }
  xy.push(x);
  xy.push(y);
  console.log(x);
  console.log(y);
  return xy;
}

let moves = ["west", "west","west","north","north","north"];
console.log(moves.length);
finalPosition(moves);
