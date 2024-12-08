function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; // Handle NaN comparisons
  } else if (Object.is(a, b)) { // use Object.is for strict comparison to address -0
    return true;
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0)); //true
console.log(foo(0,0)); //true
console.log(foo(1,2)); //false