// default parameters
function sum(x, y = 1) {
  return x + y;
}
sum(1) === 2

// spat operator as parameter
function mult(x, ...y) {
  // y becomes an Array
  return x * y[0] * y[1];
}
mult(1, 2, 3) === 6

// spat operator as argument
function sub(x, y, z) {
  return x - y - z;
}
// Pass each elem of array as argument
sub(...[3, 2, 1]) === 0