// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
}
function destructivelyPrependCat(name){
  cats.unshift(name);
}
function destructivelyRemoveLastCat(){
  cats.pop();
}
function destructivelyRemoveFirstCat(){
  cats.shift();
}
function appendCat(name){
  let otherCats=cats.slice();
  otherCats.push(name);
  return otherCats;
}
function prependCat(name){
  let otherCats=cats.slice();
  otherCats.unshift(name);
  return otherCats;
}
function removeLastCat(){
  let otherCats=cats.slice();
  otherCats.pop();
  return otherCats;
}
function removeFirstCat(){
  let otherCats=cats.slice();
  otherCats.shift();
  return otherCats;
}
