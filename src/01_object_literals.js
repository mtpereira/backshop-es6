var name = 'new object';

var jsObject = {

  // short for fistName: fistName
  name,

  // short for toString: function()
  toString() {
    // Super method
   return name + " " + super.toString();
  }

}

console.log(jsObject.toString());
