function foo(x) {
  if (x === null || x === undefined || (typeof x !== 'string' && !Array.isArray(x))) {
    return 0; // Handle null, undefined, and non-string/array cases
  }
  return x.length; 
}
//test cases
console.log(foo(null)); //0
console.log(foo(undefined)); //0
console.log(foo([1,2,3])); //3
console.log(foo('hello')); //5
console.log(foo(123)); //0