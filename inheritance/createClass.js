function createClass(ctor, superClass) {
  if (superClass) {
    ctor.prototype = Object.create(superClass.prototype);
  }
  ctor.prototype.constructor = ctor;
}

function MyObject() {}
MyObject.prototype.one = function() {return 'myObject'}
MyObject.prototype.two = function() {return 'myObject-two'}

createClass(MyArray, MyObject);
function MyArray() {this.test = 1}
MyArray.test = function() {return 'three'};
MyArray.prototype.one = function() {return 'hi'};

var arr = new MyArray()
console.log(arr)
console.log(arr.test)
console.log(arr.one())
console.log(arr.two())


// to get rid of the "new" requirement, use instanceof
createClass(MyArray2, MyObject);
function MyArray2() {
  if (!(this instanceof MyArray2)) {
    return new MyArray2();
  }
  this.test = 1
}
MyArray2.test = function() {return 'three'};
MyArray2.prototype.one = function() {return 'hi'};

var arr2 = MyArray2()
console.log(arr2)
console.log(arr2.test)
console.log(arr2.one())
console.log(arr2.two())