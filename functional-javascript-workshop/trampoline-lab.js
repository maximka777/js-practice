function repeat(operation, num) {
// Modify this so it doesn't cause a stack overflow!
  for(var i = 0; i < num; i++){
    operation();
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return repeat(operation, num);
}