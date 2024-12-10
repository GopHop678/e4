function createObject() {
  return Object.create(null);
}


const emptyObj = createObject();

console.log(emptyObj);
console.log(Object.getPrototypeOf(emptyObj));