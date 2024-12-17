function foo(a, b) {
  a = a == null ? 0 : a; // Handle null or undefined values
  b = b == null ? 0 : b; // Handle null or undefined values
  return a + b;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); //Output: 0