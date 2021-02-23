function isNatural(){
  if(this <= 0){
    return false;
  }
  return Math.round(this) == this; 
}

function isPrime(){
  if(!this.isNatural()){
    throw new Error("The number should be natural.");
  }
  if(this == 1){
    return false;
  }
  if(this == 2){
    return true;
  }
  for(let i = 2; i < this; i++){
    if(this%i === 0){
      return false;
    }
  }
  return true;
}


function factorial(){
  if(this == 0 || this == 1){
    return 1;
  }
  if(!this.isNatural()){
    throw new Error("The number should be a non-negative integer.");
  }
  return (this-1).factorial() * this;
}

function factors(){
  if(this <= 1 || !this.isNatural()){
    throw new Error("The number should be natural and greater than 1.");
  }
  const factorsArray = [];
  for(let i = 2; i < this; i++){
    if(i.isPrime() && this%i === 0){
      factorsArray.push(i);
    }
  }
  return factorsArray;
}

function init() {
  Number.prototype.isNatural = isNatural;
  Number.prototype.isPrime = isPrime;
  Number.prototype.factorial = factorial;
  Number.prototype.factors = factors;
}

module.exports = {
  init,
};
