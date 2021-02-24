
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
    return callback(true, undefined);
  }
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] !== 'number'){
      return callback(true, undefined);
    }
    sum += array[i];
  }
  return callback(null, sum);
}

function calculateAverage(callback){
  const array = this;
  return calculateSum(array, function(error, result){
    if(error){
      throw new Error("All the elements should be numbers.");
    }
    else{
      return result/array.length;
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
  Array.prototype.calculateAverage = calculateAverage;
  Array.prototype.map = map;
}

module.exports = {
  init,
  mapFactorial
};
