var a = [5, 4, 3];
// var iter = a[Symbol.iterator]();
// while (true) {
//   var iteratorResult = iter.next();
//   if (iteratorResult.done == true) break;
//   var v = iteratorResult.value;
//   console.log(v);
// }

for (var v of a) console.log(v);
