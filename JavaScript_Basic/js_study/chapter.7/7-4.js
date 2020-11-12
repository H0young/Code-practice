// function fact(n) {
//   if (n <= 1) return n;
//   return n * fact(n - 1);
// }

// for (var i = 1; i < 10; i++) {
//   console.log(i + "!= " + fact(i));
// }

function fact(n) {
  var k = 1,
    i = 1;
  while (i < n) {
    console.log("i = " + i + ", k = " + k);
    k *= ++i;
  }
  console.log("i = " + i + ", k = " + k);
  return k;
}
console.log(fact(5));
