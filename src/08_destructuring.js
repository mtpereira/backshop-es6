var user = {
  name: 'snow',
  array: [1, 2, 3],
  profile: { email: 'john@snow.got' },
  func: function({ name: x }) { return x; }
};

// list matching
var [a, , b] = user.array;
// a === 1 && b === 3

// object matching
var { name: a, array: b, profile: { email: c } } = user;
// a === 'snow' && b === [1, 2, 3] && c === 'john@snow.got'

// object matching shorthand
var { name, profile, array } = user;
// name === 'snow'
// array === [1, 2, 3]
// profile === { email: 'john@snow.got' }

// Can be used in parameter position
var a = user.func({ name: 5 })
// a === 5

// Fail-soft destructuring
var [a] = [];
// a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
// a === 1;
