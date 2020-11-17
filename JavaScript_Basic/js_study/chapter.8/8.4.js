var a = "A";
function f() {
  var b = "B";
  function g() {
    var c = "C";
    console.log(a + b + c);
  }
  g();
}
f();
