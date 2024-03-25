// OBJECTS

/*In computer science, an object is a value in memory which is possibly referenced by an identifier. In JS objects are the only mutable value. Functions are, in fact, also objects with the additional capability of being callable.

In JS, objects can be seen as a collection of properties. Object properties are equivalent to key-value pairs. 

There are two types of properties. 
  1) Data property: Data property store a specific value, much like a variable. 
*/
let obj = {
  dataProperty: 42,
};

console.log(obj.dataProperty); // Output: 42

// Modifying the value of a writable data property
obj.dataProperty = 100;
console.log(obj.dataProperty); // Output: 100

// 2) Accessor property: Accessor property do not contain a directly stored value. Instead they define getter and setter function to control access to a property.

let obj = {
  _counter: 0, // Conventionally, accessor properties have an underlying data property prefixed with an underscore
  get counter() {
    return this._counter;
  },
  set counter(value) {
    this._counter = value;
  },
};

console.log(obj.counter); // Output: 0
obj.counter = 10; // Invokes the setter function
console.log(obj.counter); // Output: 10
