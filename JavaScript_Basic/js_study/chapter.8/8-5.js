function f() {
  console.log(this);
}
var a = {};
a.f = f;
a.f();
console.log(a.f);
