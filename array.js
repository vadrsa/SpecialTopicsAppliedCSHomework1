
function removeDuplicates(){
  const withoutDuplicates = [];
  for(let i = 0; i < this.length; i++){
    if(!withoutDuplicates.includes(this[i])){
      withoutDuplicates.push(this[i]);
    }
  }
  return withoutDuplicates;
}

function calculateSum(array, callback){
  if(!Array.isArray(array)){
    callback(true, undefined);
    return;
  }
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] !== 'number'){
      callback(true, undefined);
      return;
    }
    sum += array[i];
  }
  callback(null, sum);
}

function calculateAverage(callback){
  calculateSum(this, function(error, result){
    if(error){
      throw new Error("All the elements should be numbers.");
    }
  });
}

function map(iteratee){
  const mappedArray = [];
  for(let i = 0; i < this.length; i++){
    mappedArray.push(iteratee(this[i], i));
  }
  return mappedArray;
}


function mapFactorial(array){
  if(!Array.isArray(array)){
    throw new Error("The input should be an array.");
  }
  return array.map(function(n) {
    return n.factorial();
  });
}

function init() {
  require("./number").init();
  Array.prototype.removeDuplicates = removeDuplicates;
  Array.prototype.map = map;
}

module.exports = {
  init,
  mapFactorial
};
