const a = 'John'

//a = 'Snow';
// will raise an error

// var a = 'Snow';
// also raises an error

if (true) {
  var b = 'Snow';
  console.log(b);
}
// b === 'Snow'

if (true) {
  const d = 'John'
  let c = 'Snow';
  console.log(c);
}
// c is not defined
// d is not defined
// and will both raise
// an error if used
