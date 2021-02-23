function reverse(){
  let final = ""; 
  for(let i = this.length-1; i >= 0; i--){
    final += this.charAt(i);
  }
  return final;
}

function init() {
  String.prototype.reverse = reverse;
}


module.exports = {
  init,
};
