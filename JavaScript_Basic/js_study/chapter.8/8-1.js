var a = [2, 1, 3, 5, 7];
var n = norm(a);

function norm(x) {
  var sumsum = sumSquare();
  return Math.sqrt(sumsum);
  function sumSquare() {
    sum = 0;
    for (var i = 0; i < x.length; i++) sum += x[i] * x[i];
    return sum;
  }
}

console.log(n);
